<template>
  <div class="first">
    <div class="between-1">
      <div class="intro background-img-720">
        <div class="center">
          <h1 class="intro-text">{{ msg }}</h1>
          <router-link class="button welcome-rsvp-button" to="/rsvp">RSVP</router-link>
        </div>
      </div>
      <div class="location">
        <h2>Location</h2>
        <p>_______________</p>
        <h4>Mahekal Beach Resort</h4>
        <h4>Calle 38, Entre Avenida 5a Y Zona Federal Maritima,</h4>
        <h4>Playa del Carmen, Q.R., Mexico 77710</h4>
        <br />
        <router-link class="button" to="/location">Details</router-link>
        <br />
        <br />
      </div>
      <div class="countdown background-img-720">
        <div class="countdown1">
          <div class="countdown2">
            <h4>S A V E &nbsp; T H E &nbsp; D A T E</h4>
            <h5>August 21, 2021</h5>
            <Countdown deadline="August 21, 2021"></Countdown>
          </div>
        </div>
      </div>
    </div>

    <div class="between-2">
      <div class="rsvp-respond">
        <h2>R S V P</h2>
        <p>_______________</p>
        <h4>Please respond by July 21, 2021</h4>
        <br />
        <router-link class="button" to="/rsvp">RSVP</router-link>
        <br />
        <br />
      </div>
      <div class="rsvp background-img-560"></div>
    </div>

    <modal name="covid" height="auto" :scrollable="true" id="covidModal">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h2 class="modal-title w-100">COVID-19</h2>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="hideCovidModal()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h5>Dear Family and Friends,
            <br />
            <br />We have been following along with news of the covid-19 pandemic.
            <br />We are concerned and sensitive to the uncertainties of our future.
            <br />
            <br />With that, we have decided to postpone our wedding celebrations.
            <br />At this time,  our wedding is tentatively scheduled for <strong>August 21, 2021</strong>. 
            <br />
            <br />We extend our apologies for some of you who have already made reservations. 
            <br />
            <br />We asked kindly for everyone to understand that we did not make this decision lightly. Your health is our utmost concern. 
            <br/>
            <br />We will be streaming parts of our wedding so you can attend from the comfort and safety of your home!
            <br />
            <br />If you decide to attend in person, please refer to the <a href="https://wwwnc.cdc.gov/travel/notices/covid-4/coronavirus-mexico" target="_blank">CDC</a> guidelines on their new travel requirements to Mexico.
            <br />
            <br />Be safe. Hopefully, we will all see you soon.
            <br />
            <br />- L+H
          </h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="close-modal btn btn-danger" @click="hideCovidModal()">Close</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Countdown from "vuejs-countdown";

export default {
  name: "Landing",
  props: {
    msg: String
  },
  methods: {
    showCovidModal() {
      this.$modal.show("covid");
    },
    hideCovidModal() {
      this.$modal.hide("covid");
    }
  },
  mounted() {
    this.showCovidModal();
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
h4,
h5 {
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
  background: #d38b5d;
  border: 2px solid #d38b5d;
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

.modal-body h5 {
  text-align: center;
  padding: 20px;
}

#covidModal {
  opacity: 0.9;
}

.welcome-rsvp-button {
    margin-top: 5%;
    padding: 5px 25px;
    font-size: 14px;
}

.intro-text {
  font-size: 40px;
}
</style>