<template>
  <div class="container">
    <div class="row">
      <q-btn class="box" v-on:click="play(0, 0)">{{ board[0][0] }}</q-btn>
      <q-btn class="box" v-on:click="play(0, 1)">{{ board[0][1] }}</q-btn>
      <q-btn class="box" v-on:click="play(0, 2)">{{ board[0][2] }}</q-btn>
    </div>
    <div class="row">
      <q-btn class="box" v-on:click="play(1, 0)">{{ board[1][0] }}</q-btn>
      <q-btn class="box" v-on:click="play(1, 1)">{{ board[1][1] }}</q-btn>
      <q-btn class="box" v-on:click="play(1, 2)">{{ board[1][2] }}</q-btn>
    </div>
    <div class="row">
      <q-btn class="box" v-on:click="play(2, 0)">{{ board[2][0] }}</q-btn>
      <q-btn class="box" v-on:click="play(2, 1)">{{ board[2][1] }}</q-btn>
      <q-btn class="box" v-on:click="play(2, 2)">{{ board[2][2] }}</q-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      board: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ],
      turn: 1,
      winner: false
    }
  },
  methods: {
    play: function (r, c) {
      if (this.winner === false) {
        if (this.board[r][c] === ' ') {
          this.board[r][c] = this.turn % 2 === 0 ? 'O' : 'X'
          this.turn = this.turn + 1
        }
        console.log(this.board[r][c])
        if (this.winCheck('X')) {
          this.winner = true
          console.log('X won')
        } else if (this.winCheck('O')) {
          this.winner = true
          console.log('O won')
        }
        this.$forceUpdate()
      }
    },
    winCheck: function (letter) {
      for (let i = 0; i < this.board.length; i++) {
        if (
          this.board[i][0] === letter &&
          this.board[i][1] === letter && this.board[i][2] === letter
        ) {
          return true
        }
      }
      for (let j = 0; j < this.board.length; j++) {
        if (
          this.board[0][j] !== ' ' &&
          this.board[0][j] === this.board[1][j] &&
          this.board[1][j] === this.board[2][j]
        ) {
          return true
        }
      }
      if (
        this.board[1][1] === letter &&
        ((this.board[0][0] === letter && this.board[2][2] === letter) ||
        (this.board[0][2] === letter && this.board[2][0] === letter))
      ) {
        return true
      }
    }
  }
}
</script>

<style>
.box {
  width: 50px;
  height: 50px;
}
</style>
