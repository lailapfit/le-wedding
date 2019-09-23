<template>
  <div id="app">
    <formio src="https://brinjrhlcnmaclj.form.io/rsvp" v-on:submit="submit"></formio>
  </div>
</template>

<script>
  import { Form } from 'vue-formio';
  export default {
      name: 'app',
      components: { formio: Form },
  }
</script>