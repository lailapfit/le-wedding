<template>
    <div class="itinerary">
    <Timeline msg="The timeline for Labor Day weekend 2020" />
    </div>
</template>

<script>
import Timeline from "@/components/Timeline.vue";


export default {
    name: "itinerary",
    components: {
        Timeline
    }
};
</script>
