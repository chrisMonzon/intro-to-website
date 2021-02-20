<template>
  <div class="container" align="center">
    <div class="box" align="left">
      {{ exp }}
    </div>
    <div class="box">
      <div v-for="index in 3" :key="index">
        <div class="row">
          <q-btn v-for="index2 in 3" :key="index2" v-on:click="addNum((6 + index2) - (index - 1) * 3)">
            {{ (6 + index2) - (index - 1) * 3 }}
          </q-btn>
          <q-btn style="width: 40px;" v-on:click="addNum(operator[index - 1])"> {{ operator[index - 1] }} </q-btn>
        </div>
      </div>
      <div align="left" class="row">
        <q-btn v-bind:style="styleString" v-for="(val, index) in bottomRow" :key="val.id" v-on:click="addNum(bottomRow[index])">{{ bottomRow[index] }}</q-btn>
      </div>
      <div align="left" class="row">
        <q-btn style="height: 45px; width: 40px" v-on:click="del()">del</q-btn>
        <q-btn style="height: 45px; width: 120px" v-on:click="calc()">=</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      outp: null,
      operators: [],
      operands: [],
      operator: ['/', '*', '-', '+'],
      bottomRow: ['0', '.', '+/-', '+'],
      exp: '0',
      opIndex: 0,
      opList: [],
      end: 0,
      styleString: 'height: 40px; width: 40px;'
    }
  },
  methods: {
    addNum: function (op) {
      this.exp = this.exp === '0' ? op : this.exp + '' + op
      this.$forceUpdate()
    },
    calc: function () {
      let token = ''
      for (let i = 0; i < this.exp.length; i++) {
        console.log(token)
        if (this.operator.includes(this.exp[i])) {
          this.operands.push(parseFloat(token))
          token = ''
          this.operators.push(this.exp[i])
        } else {
          token += this.exp[i]
        }
        if (i === this.exp.length - 1) {
          this.operands.push(parseFloat(token))
        }
      }
      while (this.operators.length !== 0) {
        console.log('62 ' + this.operands)
        console.log('63' + this.operators)
        const newNum = this.eval(
          parseFloat(this.operands.shift()),
          parseFloat(this.operands.shift()),
          this.operators.shift()
        )
        console.log('newNum:' + newNum)
        this.operands.unshift(newNum) // insert
        console.log('67 ' + this.operands)
        console.log('68 ' + this.operators)
      }

      console.log(this.operands[0])
      this.exp = this.operands[0]
      this.operands = []
      console.log(this.operands)
      console.log(this.operators)
      // return this.operands.splice(0, 1)[0]
    },
    del: function () {
      this.exp = this.exp.substring(0, this.exp.length - 1)
      console.log('deleted')
    },
    eval: function (a, b, c) {
      console.log('eval', a, b, c)
      if (c === '+') {
        console.log('addition')
        return (a + b)
      } else if (c === '-') {
        console.log('subtraction')
        return (a - b)
      } else if (c === '*') {
        return (a * b)
      } else if (c === '/') {
        return (a / b)
      }
      return 0
    }
  }
}
</script>

<style>
  .box {
    min-height: 16px;
    max-width: 169px;
    border: solid;
  }
</style>
