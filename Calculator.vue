<template>
  <div class="container" align="center">
    <div align="left" style="min-height:16px;">
      {{ exp }}
    </div>
    <div class="center">
      <div v-for="index in 3" :key="index">
        <div class="row">
          <q-btn v-for="index2 in 3" :key="index2" v-on:click="addNum((6 + index2) - (index - 1) * 3)">
            {{ (6 + index2) - (index - 1) * 3 }}
          </q-btn>
          <q-btn style="width: 40px;" v-on:click="addNum(operator[index - 1])"> {{ operator[index - 1] }} </q-btn>
        </div>
      </div>
      <div align="left" class="row">
        <q-btn style="width: 40px;" v-for="(val, index) in bottomRow" :key="val.id" v-on:click="addNum(bottomRow[index])">{{ bottomRow[index] }}</q-btn>
      <q-btn style="height: 90px; width: 40px;" v-on:click="eval()">=</q-btn>
      <q-btn style="height: 90px; width: 40px;" v-on:click="del()">del</q-btn>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      outp: null,
      operator: ['/', '*', '-', '+'],
      bottomRow: ['0', '.', '+/-', '+'],
      exp: '',
      opIndex: 0,
      opList: [],
      end: 0,
      opCount: 0
    }
  },
  methods: {
    addNum: function (op) {
      this.exp += op
      this.$forceUpdate()
    },
    opCheck: function () {
      for (let i = 0; i < this.exp.length; i += 1) {
        if (this.operator.includes(this.exp[i])) {
          this.opIndex = i
          this.opList.push(this.opIndex)
          console.log(this.opList + ' line 50')
          return true
        }
      }
      return false
    },
    del: function () {
      this.exp = this.exp.substring(0, this.exp.length - 1)
      console.log('deleted')
    },
    eval: function () {
      let breaker = 0
      while (this.opCheck()) {
        console.log(this.opCheck())
        this.opList.forEach(op => {
          console.log('op = ' + op)
        })

        const a = parseFloat(this.exp.substring(0, this.opIndex))
        const b = parseFloat(this.exp.substring(this.opIndex + 1))
        console.log(this.exp + ' ' + this.opIndex)
        console.log(this.exp)
        const i = this.opCount
        // trace end and s
        this.findEnd()

        const s = i > 1 ? this.exp.substring(this.end + 1) : ''
        if (this.exp[this.opList[0]] === '+') {
          console.log('here')
          this.exp = (a + b) + s
        } else if (this.exp[i] === '-') {
          this.exp = (a - b) + s
        } else if (this.exp[i] === '*') {
          this.exp = (a * b) + s
        } else if (this.exp[i] === '/') {
          this.exp = (a / b) + s
        }
        this.opIndex = 0
        this.opList.pop()

        breaker += 1
        if (breaker > 50) {
          break
        }
      }
    },
    findEnd: function () {
      for (let k = 0; k < this.exp.length; k += 1) {
        if (this.operator.includes(this.exp[k])) {
          this.opCount += 1
        }
        if (this.opCount > 1) {
          this.end = k
          console.log('k = ' + this.end) // , this.opList, this.exp[i])
          return true
        }
      // stops adding operator to opList
      }
      return false
    }
  }
}
</script>

<style>
  .box {
    width:"40px;"
  }
</style>
