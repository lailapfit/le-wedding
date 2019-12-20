<template>
    <div class="first">
        <div class="between-1">
            <div class="intro background-img-720">
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <h1>{{ msg }}</h1>
                <h3>______________</h3>
                <router-link class="button" to="/rsvp">RSVP</router-link>
            </div>

        <h2>Location</h2>
        <p>_______________</p>
        <h4>Mahekal Beach Resort</h4>
        <p>Ceremony: La Fuega Beach </p>
        <p>Reception: Las Olas Restaurante </p>

        <!-- <p>Address: <br>
        Calle 38, Entre Avenida 5a Y Zona Federal Maritima, <br> 
        Centro, 77710 <br> 
        Playa del Carmen, Q.R., Mexico</p> <br>
        <p>Airport: <br>
        Cancun International Aeropuerto (CUN)</p>
        <p>Estimated time from CUN to Mahekal: 60 minutes</p> -->
        <router-link class="button" to="/location">Details</router-link><br><br><br>
        <div class="countdown background-img-720">
            <div class="countdown1">
                <div class="countdown2">
                    <h4>S A V E &nbsp; T H E  &nbsp; D A T E</h4>
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
            <router-link class="button" to="/rsvp">RSVP</router-link>
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
    word-spacing: 0.005em;
    letter-spacing: 1em;
}
h4 {
    color: black;
}
h3 {
    color: white;
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

.button {
  color: white;
  border: 2px solid #abd2fe;
  background: #abd2fe;
  border-radius: 10px;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  opacity: 0.9;
}

.button:hover {
background: #fe7433;
  border: 2px solid #fe7433;
  opacity: 0.9;
  border-radius: 10px;
  color: white; 
  font-weight: bold;
}

.first {
   background-image: url("../assets/noise.png");
}
</style>