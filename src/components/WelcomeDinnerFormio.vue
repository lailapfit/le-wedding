<template>
  <div class="container">
    <div class="body">
      <formio :src="formURL" v-on:submit="onSubmitMethod"></formio>
    </div>
  </div>
</template>

<script>
import { Form } from "vue-formio";

export default {
  name: "welcomeDinnerFormio",
  components: {
    formio: Form
  },
  data: function() {
    return {
      formURL: "https://brinjrhlcnmaclj.form.io/welcomedinner"
    };
  },
  methods: {
    onSubmitMethod: function(submission) {
      console.log("submission > " + submission);
    }
  }
};
</script>

<style scoped>
.body {
  text-align: center;
}
</style>