<template>
  <q-page class="" align="center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <div>
      <button v-on:click="testAlert()"  type="button">Text</button>
      <button v-on:click="testAlert()" type="button">Text</button>
      <input type="text" v-model="name2">
    </div>
    <div align="center">
      {{ name }}
      <q-btn v-on:click="testAlert()">Text</q-btn>
      <q-input outlined v-model="name" style="width: 150px;"/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      name: null,
      name2: null
    }
  },
  methods: {
    testAlert: function () {
      alert('Hello, world!' + this.name + ' ' + this.name2)
    }
  }
}
</script>
