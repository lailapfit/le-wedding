<template>
    <div class="first">
        <div class="between-1">
            <div class="intro background-img-720">
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <h1>{{ msg }}</h1>
                <router-link class="rsvp-button" to="/rsvp">RSVP</router-link>
            </div>

        <h2>Location</h2>
        <p>_______________</p> <br>
        <h4>Mahekal Beach Resort</h4>
        <p>Ceremony: La Fuega Beach </p>
        <p>Reception: Las Olas Restaurante </p>
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
                    <h4>S A V E &nbsp T H E  &nbsp D A T E</h4>
                    <h5>September 5th, 2020</h5>
                    <Countdown deadline="September 5, 2020"></Countdown>
                </div>
            </div>
        </div>
       
       </div>

        <div class="between-2">
            <h2>R S V P</h2>
            <p>_______________</p>
            <h4>Please respond by July 05, 2020</h4>
            <router-link class="rsvp-button" to="/rsvp">RSVP</router-link>
            <div class="rsvp background-img-560">
                
            </div>

        </div>
    </div>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
    name: "Landing",
    props: {
        msg: String
    },
    components: {
        Countdown
    }
};
</script>

<style scoped>
h1 {
    color: white;
}
h4 {
    color: black;
}
.intro {
    background-image: url("../assets/teatre.jpg");
}
.countdown {
    background-image: url("../assets/bw.jpg");
}
.rsvp {
    background-image: url("../assets/pipila.jpg");
}

.background-img-720 {
    background-size: cover;
    background-attachment: fixed;
    height: 720px;
}

.background-img-560 {
    background-size: cover;
    background-attachment: fixed;
    height: 720px;
}
.vuejs-countdown {
    color: black;
    font-weight: bold; 
}

.countdown1 {
    padding-top: 20%;
}

.countdown2 {
    height: 150px;
    width: 300px;
    background-color: #cccccc;
    margin: auto;
}

.rsvp-button {
  color: black;
  border: 2px solid white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.rsvp-button:hover {
  background-color: white; 
}
</style>