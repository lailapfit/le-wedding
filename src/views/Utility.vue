<template>
    <div class="utility">
    <Calculator msg="trip calculator" />
    </div>
</template>

<script>
import Calculator from "@/components/Calculator.vue";


export default {
    name: "utility",
    components: {
        Calculator
    }
};
</script>