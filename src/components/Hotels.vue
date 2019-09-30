<template>
<div class="hotels">
     <div class="between-1">
            <div class="intro background-img-720">
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <h1>{{ msg }}</h1>
            </div>
        <p>_______________</p> <br>
        <h4>1) Mahekal Beach Resort</h4>
        <p>__________________ * ____________________</p> <br>
        <p>Address: <br>
        Calle 38, Entre Avenida 5a Y Zona Federal Maritima, <br> 
        Centro, 77710 <br> 
        Playa del Carmen, Q.R., Mexico</p> <br>
        <p>Airport: <br>
        Cancun International Aeropuerto (CUN)</p>
        <p>Estimated time from CUN to Mahekal: 60 minutes</p>

        <div class="countdown background-img-720">
            <div class="countdown1">
                <div class="countdown2">
                    <h4>2) Andaz Hyatt</h4>
<p>__________________ * ____________________</p> <br>
        <p>Address: <br>
        Calle 38, Entre Avenida 5a Y Zona Federal Maritima, <br> 
        Centro, 77710 <br> 
        Playa del Carmen, Q.R., Mexico</p> <br>
        <p>Airport: <br>
        Cancun International Aeropuerto (CUN)</p>
        <p>Estimated time from CUN to Mahekal: 60 minutes</p>
                </div>
            </div>
        </div>
       
       </div>

        <div class="between-2">
            <h4>3) </h4>
<p>__________________ * ____________________</p> <br>
        <p>Address: <br>
        Calle 38, Entre Avenida 5a Y Zona Federal Maritima, <br> 
        Centro, 77710 <br> 
        Playa del Carmen, Q.R., Mexico</p> <br>
        <p>Airport: <br>
        Cancun International Aeropuerto (CUN)</p>
        <p>Estimated time from CUN to Mahekal: 60 minutes</p>
            <router-link class="rsvp-button" to="/rsvp">RSVP</router-link>
            <div class="rsvp background-img-560">
                
            </div>

        </div>
</div>
</template>

<script>
export default {
  name: "hotels",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h1 {
    color: black;
}
</style>