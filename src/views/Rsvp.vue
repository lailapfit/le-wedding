<template>
<div class="formio">
  <h1>RSVP</h1><br><br>
  <h4>We have invited you to 2 wedding events and both requires your RSVP<br>Be sure to scroll all the way down.
  <br><br>Location: Mahekal Beach Resorts<br> Calle 38, Entre Avenida 5a Y Zona Federal Maritima,<br />Centro, 77710
    <br />Playa del Carmen, Q.R., Mexico</h4>
  <img src="../assets/leaf-large.png">
  <div class="sections">
    <div class="wedding-rsvp">
      <div class="section-content">
        <h2>Wedding</h2>
        <p>SATURDAY, SEPTEMBER 5, 2020</p>
        <p>Ceremony: La Fuega Beach<br> 5:00 PM - 6:00 PM</p>
        <p>Cocktail Hour: Firepit <br> 6:00 PM - 7:00 PM</p>
        <p>Reception: Las Olas Restaurant <br> 7:00 PM - 11:00 PM</p>
        <p>Buffet style dinner, open bar, and lots of dancing!</p>
      </div>
      <div class="section-content bttn">
        <i class="fas fa-child fa-3x"></i><br><br>
        <button @click="handleClick()">WILL ATTEND</button>&nbsp;
        <button>WILL NOT ATTEND</button><br><br><br><br><br><br>
      </div>
    </div>
     <div id="io">
    <formio src="https://brinjrhlcnmaclj.form.io/rsvp" v-on:submit="submit"></formio>
  </div>
    <div class="welcome-dinner">
      <div class="section-content">
        <h2>Welcome Dinner</h2>
        <p>FRIDAY, SEPTEMBER 4, 2020<br>6:00 PM - 8:00 PM</p>
        <p>Firepit</p>
        <p>There will be a taco bar in addition to refreshing drinks. Can't wait to see you!</p>
      </div>
    <div class="section-content bttn">
      <i class="fas fa-child fa-3x"></i><br><br>
      <button class="attend">WILL ATTEND</button>&nbsp;
      <button>WILL NOT ATTEND</button><br><br><br>
    </div>
  </div>
  </div>

  </div>
</template>

<script>
  import { Form } from 'vue-formio';
  export default {
      name: 'io',
      components: { 
        formio: Form 
        },
      methods: {
        handleClick: function() {
          let attend = document.getElementById("io");
          attend.style.display = "block";
        }
      }
  }

</script>

<style scoped>
#io {
  width: 50%;
  transform: translate(50%);
  display: none;
}

img {
  width: 10%;
  height: 50%;
  padding-bottom: 3%;
  padding-top: 3%;
}
.formio {
background-image: url("../assets/noise.png");
}

.section-content {
  display: inline-block;
  width: 30%;
  padding-bottom: 5%;
}

.bttn {
  margin: auto;
}
</style>
