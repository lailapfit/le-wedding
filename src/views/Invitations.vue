<template>
    <div class="invitations">
      <Rsvp></Rsvp>  
    </div>
</template>

<script>
import Rsvp from '@/components/Rsvp.vue'

export default {
    name: "invitations",
    components: {
        Rsvp
    }
}
</script>