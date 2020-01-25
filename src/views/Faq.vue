<template>
  <div class="faq">
    <questions msg="FAQ" />
  </div>
</template>

<script>
// @ is an alias to /src
import Questions from "@/components/Questions.vue";

export default {
  name: "faq",
  components: {
    Questions
  }
};
</script>
