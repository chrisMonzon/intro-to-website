<template>
  <div>
    <q-btn v-on:click="initBoard()">print</q-btn>
  </div>
</template>

<script>

import Board from './Board'

export default {
  data () {
    return {
    }
  },
  methods: {
    initBoard: function () {
      const board = new Board()
      console.log(board.getBoard())
    }
  }
}
</script>

<style>

</style>
