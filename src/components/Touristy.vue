<template>
<div class="touristy">
    <h1>{{ msg }}</h1>
</div>
</template>

<script>
export default {
  name: "Touristy",
  props: {
    msg: String
  }
};
</script>

<style scoped></style>