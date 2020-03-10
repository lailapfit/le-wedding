<template>
    <div class="first">
        <div class="between-1">
            <div class="intro background-img-720">
                <div class="center">
                <h1>{{ msg }}</h1>
                </div>
            </div>
    <div class="location">
        <h2>Location</h2>
        <p>_______________</p>
        <h4>Mahekal Beach Resort</h4>
        <h4>Calle 38, Entre Avenida 5a Y Zona Federal Maritima,</h4>
        <h4>Playa del Carmen, Q.R., Mexico 77710</h4><br />
        <router-link class="button" to="/location">Details</router-link><br><br>
    </div>
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
            <div class="rsvp-respond">
            <h2>R S V P</h2>
            <p>_______________</p>
            <h4>Please respond by July 05, 2020</h4><br />
            <router-link class="button" to="/rsvp">RSVP</router-link><br><br>
            </div>
            <div class="rsvp background-img-560"></div>
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
    letter-spacing: 0.25em;
}
h4, h5 {
    color: black;
}
h3 {
    color: white;
}
.intro {
    background-image: url("../assets/UG.jpg");
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
    background-color: rgba(211, 139, 93, 1);
    opacity: 0.9;
    margin: auto;
    padding: 1%;
    border-radius: 5px;
}

.button {
    color: white;
    border: 2px solid #1e90ff;
    background-color: #1e90ff;
    border-radius: 10px;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
    opacity: 0.9;
}

.button:hover {
    background: #D38B5D;
    border: 2px solid #D38B5D;
    opacity: 0.9;
    border-radius: 10px;
    color: white; 
    font-weight: bold;
}

.first {
    background-image: url("../assets/noise.png");
}

.center {
    display: inline-block;
    padding-top: 22%;
    padding-right: 38%;
}

.location {
    padding: 1%;
}

.rsvp-respond {
    padding: 1%;
}

.center h1 {
    color: #d14401;
    opacity: 0.5;
}
</style>