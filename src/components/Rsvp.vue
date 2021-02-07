<template>
  <div class="invitations">
    <div class="center">
      <span>rsvp by july 21, 2021</span>
    </div>

    <div class="sections row">
      <div class="rsvp col card">
        <h1 class="card-header">Wedding</h1>
        <div class="section-content card-body">
          <p class="card-title">SATURDAY, AUGUST 21, 2021</p>
          <p class="card-text">
            Ceremony: La Fuega Beach
            <br />5:00 PM - 6:00 PM
            <br />
            <br />Cocktail Hour: Firepit
            <br />6:00 PM - 7:00 PM
            <br />
            <br />Reception: Las Olas Restaurant
            <br />7:00 PM - 11:00 PM
          </p>
          <p class="card-text">Buffet style dinner, open bar, and lots of dancing!</p>
        </div>
        <div class="button-content">
          <button @click="showRsvpModal">
            <span class="icon">
              <i class="far fa-envelope-open fa-2x"></i>
            </span>
            <span class="rsvp-bttn"> RSVP</span>
          </button>
          <br />
          <br />
          <button title="Add to Calendar" class="addeventatc" data-dropdown-x="auto">
            <span class="icon">
              <i class="fa fa-calendar fa-1x"></i>
            </span>
            <span class="rsvp-bttn"> Add to Calendar</span>
            <span class="calname">LailaAndCuongsWedding</span>
            <span class="start">08/21/2021 05:00 PM</span>
            <span class="end">08/21/2021 11:00 PM</span>
            <span class="timezone">America/Los_Angeles</span>
            <span class="title">Laila and Cuong's Wedding</span>
            <span class="description">We're so excited you're joining us to celebrate our wedding on Labor Day Weekend!</span>
            <span class="location">Playa del Carmen, Mexico</span>
          </button>
        </div>
      </div>
      <modal name="rsvp-formio" height="auto" :scrollable="true">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">Wedding: Ceremony & Reception</h2>
          </div>
        <div class="modal-body"> 
        <r-formio></r-formio>
        </div>
        <div class="modal-footer">
        <button type="button" class="close-modal" @click="hideRsvpModal()">Close</button>
        </div>
        </div>
      </modal>
      <div class="rsvp col card">
        <h1 class="card-header">Welcome Dinner</h1>
        <div class="section-content card-body">
          <p class="card-title">
            FRIDAY, AUGUST 20, 2021
            <br />
            <br />6:00 PM - 8:00 PM
          </p>
          <p class="card-text">Firepit</p>
          <p class="card-text">
            There will be a taco bar in addition to refreshing drinks.
            <br />Can't wait to see you!
          </p>
        </div>
        <div class="button-content">
          <button @click="showWelcomeModal">
            <span class="icon">
              <i class="far fa-envelope-open fa-2x"></i>
            </span>
            <span class="rsvp-bttn"> RSVP</span>
          </button>
          <br />
          <br />
          <button title="Add to Calendar" class="addeventatc" data-dropdown-x="auto">
            <span class="icon">
              <i class="fa fa-calendar fa-1x"></i>
            </span>
            <span class="rsvp-bttn"> Add to Calendar</span>
            <span class="calname">LailaAndCuongsWedding</span>
            <span class="start">08/20/2021 06:00 PM</span>
            <span class="end">08/20/2021 08:00 PM</span>
            <span class="timezone">America/Los_Angeles</span>
            <span class="title">Laila and Cuong's Welcome Dinner</span>
            <span class="description">We're so excited you're joining us to celebrate our wedding on Labor Day Weekend!</span>
            <span class="location">Playa del Carmen, Mexico</span>
          </button>
        </div>
      </div>
       <modal name="welcome-formio" height="auto" :scrollable="true">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">Welcome Dinner</h2>
          </div>
        <div class="modal-body">  
        <w-formio></w-formio>
        </div>
        <div class="modal-footer">
        <button class="close-modal" @click="hideWelcomeModal()">Close</button>
        </div>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
import { Form } from "vue-formio";
import rsvpFormio from "./RsvpFormio.vue";
import welcomeDinnerFormio from "./WelcomeDinnerFormio.vue";

export default {
  name: "rsvpFormio",
  components: {
    formio: Form,
    "r-formio": rsvpFormio,
    "w-formio": welcomeDinnerFormio
  },
  methods: {
    reload: function() {
      if (localStorage.getItem("reloaded")) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem("reloaded");
      } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem("reloaded", "1");
        location.reload();
      }
    },
    showRsvpModal() {
      this.$modal.show("rsvp-formio");
    },
    hideRsvpModal() {
      this.$modal.hide("rsvp-formio");
    },
    showWelcomeModal() {
      this.$modal.show("welcome-formio");
    },
    hideWelcomeModal() {
      this.$modal.hide("welcome-formio");
    }
  },
  mounted() {
    this.reload();
  }
};
</script>

<style scoped>
#io,
#io2 {
  width: 50%;
  transform: translate(50%);
  display: none;
}

p {
  font-size: 14px;
}

h2 {
  font-size: 22px;
}

img {
  width: 10%;
  height: 50%;
  padding-bottom: 3%;
  padding-top: 3%;
}
.invitations {
  background-image: url("../assets/holdinghands.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.center {
  display: inline-block;
  margin-top: 10%;
  font-size: 45px;
  margin-bottom: 5%;
  color: white;
  font-weight: bold;
  letter-spacing: 25px;
  opacity: 0.5;
}

.rsvp {
  border: 1px solid #e98a5e;
  border-radius: 20px;
  margin-bottom: 5%;
  margin-right: 6%;
  margin-left: 6%;
  column-count: 2;
  background-color: #e98a5e;
  opacity: 0.9;
  color: black;
  font-weight: bold;
}

.section-content {
  padding-bottom: 5%;
  padding-top: 5%;
  height: auto;
  text-align: center;
}

.icon {
  border: 1px solid white;
  display: inline-block;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  color: black;
  background-color: white;
}

button {
  border-radius: 15px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: white;
  opacity: 0.7;
  width: 150px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
}

.bttn {
  padding-left: 80px;
  padding-top: 80px;
}

.bttn-left {
  padding: 0;
}

.bttn button {
  display: block;
}

.rsvp-bttn {
  color: black;
  font-size: 14px;
  font-weight: 600;
}

.addeventatc {
  z-index: 0;
  padding: 1%;
}

.button-content {
  padding-bottom: 5%;
  height: auto;
  text-align: center;
}

.close-modal {
  background-color: red;
  border-radius: 1px;
  opacity: 0.9;
  width: 15%;
  float: right;
  color: white;
}

</style>
