<template>
  <div class="questions">
    <div class="padding-sm"> 
    <span class="intro">{{ msg }}</span>
    </div>
    <br />
    <br />
    <div class="accordion-grid-container">
      <div class="accordion">
        <h2>
          <i class="fas fa-plane"></i> AIRPORT
        </h2>
        <h5>What is the closest airport to the venue?</h5>
        <ul v-show-slide="featuresOpen" class="features" id="features">
          <h5>
            Cancun International Airport (CUN)
            <br />
            <br />Estimated travel time: ~45-60 minutes
            <br />
            <br />Uber and Lyft are not available at the airport, there are tons shuttle services when you arrive. However, if you let us know your arrival time, we can arrange the transportation for you.
          </h5>
        </ul>
        <!-- <i class="fas fa-plane fa-4x" @click="toggleFeatures">{{ featuresOpen ? 'Hide Features' : 'View Features' }}</i> -->
        <button @click="toggleFeatures" class="toggle-features">{{ featuresOpen ? 'Hide' : 'View' }}</button>
      </div>
      <div class="accordion">
        <h2>
          <i class="fas fa-address-book"></i> PASSPORT
        </h2>
        <h5>Do I need a passport or visa to enter Mexico?</h5>
        <ul v-show-slide="featuresOpen1" class="features">
          <h5>
            Yes, yes you do. Citizens and Permenant Residents (Green Card) of the US need their passports to enter Mexico.
            <br />
            <br />Visa is not needed!
            <br />
            <br />Use the following information regarding how the US Department of State handles Passport Applications:
          </h5>
          <br />
          <div class="passport">
            <h5>Adult First-Time Applicants (16 and older)</h5>
            <table>
              <tr>
                <th>Product</th>
                <th>Form(s)</th>
                <th>Application Fee</th>
                <th>Execution (Acceptance) Fee</th>
              </tr>
              <tr>
                <td>Passport Book</td>
                <td>
                  <a
                    title="Forms page"
                    href="https://travel.state.gov/content/travel/en/passports/how-apply/forms.html"
                    adhocenable="false"
                  >DS-11</a>
                </td>
                <td>$100</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Passport Card</td>
                <td>
                  <a
                    title="Forms page"
                    href="https://travel.state.gov/content/travel/en/passports/how-apply/forms.html"
                    adhocenable="false"
                  >DS-11</a>
                </td>
                <td>$30</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Passport Book & Card</td>
                <td>
                  <a
                    title="Forms page"
                    href="https://travel.state.gov/content/travel/en/passports/how-apply/forms.html"
                    adhocenable="false"
                  >DS-11</a>
                </td>
                <td>$140</td>
                <td>$35</td>
              </tr>
            </table>
          </div>
          <div class="passport">
            <h5>Adult Renewal Applicants (16 and older)</h5>
            <table>
              <tr>
                <th>Product</th>
                <th>Form(s)</th>
                <th>Application Fee</th>
              </tr>
              <tr>
                <td>Passport Book</td>
                <td>
                  <a
                    title="Forms page"
                    href="https://travel.state.gov/content/travel/en/passports/how-apply/forms.html"
                    adhocenable="false"
                  >DS-82</a>
                </td>
                <td>$111</td>
              </tr>
              <tr>
                <td>Passport Card</td>
                <td>
                  <a
                    title="Forms page"
                    href="https://travel.state.gov/content/travel/en/passports/how-apply/forms.html"
                    adhocenable="false"
                  >DS-82</a>
                </td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Passport Book & Card</td>
                <td>
                  <a
                    title="Forms page"
                    href="https://travel.state.gov/content/travel/en/passports/how-apply/forms.html"
                    adhocenable="false"
                  >DS-82</a>
                </td>
                <td>$140</td>
              </tr>
            </table>
          </div>
          <div class="passport">
            <h5>Child Applicants (Under 16)</h5>
            <table>
              <tr>
                <th>Product</th>
                <th>Form(s)</th>
                <th>Application Fee</th>
                <th>Execution (Acceptance) Fee</th>
              </tr>
              <tr>
                <td>Passport Book</td>
                <td>
                  <a
                    title="Forms page"
                    href="https://travel.state.gov/content/travel/en/passports/how-apply/forms.html"
                    adhocenable="false"
                  >DS-11</a>
                </td>
                <td>$80</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Passport Card</td>
                <td>
                  <a
                    title="Forms page"
                    href="https://travel.state.gov/content/travel/en/passports/how-apply/forms.html"
                    adhocenable="false"
                  >DS-11</a>
                </td>
                <td>$15</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Passport Book & Card</td>
                <td>
                  <a
                    title="Forms page"
                    href="https://travel.state.gov/content/travel/en/passports/how-apply/forms.html"
                    adhocenable="false"
                  >DS-11</a>
                </td>
                <td>$95</td>
                <td>$35</td>
              </tr>
            </table>
          </div>
          <div class="passport">
            <h5>Processing Time</h5>
            <table>
              <tr>
                <td>Routine</td>
                <td>6-8 weeks</td>
              </tr>
              <tr>
                <td>Expedited</td>
                <td>2-3 weeks</td>
              </tr>
              <tr>
                <td>Expedited at Agency</td>
                <td>*8 Business Days</td>
              </tr>
            </table>
          </div>
          <h4>
            Apply at an
            <a
              title="Find your acceptance facility"
              href="https://iafdb.travel.state.gov/"
              target="_blank"
              adhocenable="false"
            >acceptance facility</a>
            <br />or
            <a
              title="Renew by Mail"
              href="/content/travel/en/passports/have-passport/renew.html"
              target="_blank"
              adhocenable="false"
            >renew by mail</a>
          </h4>
        </ul>
        <button
          @click="toggleFeatures1"
          class="toggle-features"
        >{{ featuresOpen1 ? 'Hide' : 'View' }}</button>
      </div>
      <div class="accordion">
        <h2>
          <i class="fas fa-bed"></i> HOTEL COST
        </h2>
        <h5>How much does the hotel cost?</h5>
        <ul v-show-slide="featuresOpen2" class="features">
          <div class="hotel-cost">
            <h5>Mahekal Beach Resorts</h5>
            <table>
              <tr>
                <th>Room Type</th>
                <th>Max Occupancy</th>
                <th>Amenities</th>
                <th>Cost</th>
              </tr>
              <tr>
                <td>Garden View</td>
                <td>2 adults + 1 children (4 yrs & younger)</td>
                <td>Breakfast Buffet + Lunch/Dinner</td>
                <td>$262.11/per night, taxes + fees included</td>
              </tr>
              <tr>
                <td>Ocean View</td>
                <td>2 adults + 1 children (4 yrs & younger)</td>
                <td>Breakfast Buffet + Lunch/Dinner</td>
                <td>$393.01/per night, taxes + fees included</td>
              </tr>
            </table>
          </div>
          <div class="hotel-cost">
            <h5>Grand Hyatt Playa del Carmen</h5>
            <table>
              <tr>
                <th>Room Type</th>
                <th>Max Occupancy</th>
                <th>Amenities</th>
                <th>Cost</th>
              </tr>
              <tr>
                <td>King Standard</td>
                <td>2 adults + 1 children (4 yrs & younger)</td>
                <td>Breakfast Buffet + Lunch/Dinner</td>
                <td>$262.11/per night, taxes + fees included</td>
              </tr>
              <tr>
                <td>Ocean View</td>
                <td>2 adults + 1 children (4 yrs & younger)</td>
                <td>
                  Room only, add'l amenities can be found at
                  <a
                    href="https://www.hyatt.com/en-US/hotel/mexico/grand-hyatt-playa-del-carmen-resort/cunpc/rooms"
                    target="_blank"
                  >Grand Hyatt</a> or our
                  <a href="/location" target="_blank">Accommodation section</a>
                </td>
                <td>$393.01/per night, taxes + fees included</td>
              </tr>
            </table>
          </div>
        </ul>
        <button
          @click="toggleFeatures2"
          class="toggle-features"
        >{{ featuresOpen2 ? 'Hide' : 'View' }}</button>
      </div>
      <div class="accordion">
        <h2>
          <i class="fas fa-glass"></i> ALL INCLUSIVE?
        </h2>
        <ul v-show-slide="featuresOpen3" class="features">
          <h5>
            Mahekal does not offer all inclusive option, however, the cost per room comes with Daily Breakfast Buffet and your choice of Lunch or Dinner a-la-cart.
            <br />
            <br />There are 4 restaurants and 3 bars to choose from! If you fancy something different, restaurants outside of the resort are only walking distance away.
            <br />Grand Hyatt does offer an all inclusive option!
          </h5>
        </ul>
        <button
          @click="toggleFeatures3"
          class="toggle-features"
        >{{ featuresOpen3 ? 'Hide' : 'View' }}</button>
      </div>
      <!-- <div class="accordion">
      <h2>MAHEKAL - WHICH ROOM TO CHOOSE <i class="fas fa-question-circle"></i></h2>
      <ul v-show-slide="featuresOpen4" class="features">
        <li>The airport to go to is Cancun International Airport (CUN)</li>
      </ul>
       <button @click="toggleFeatures4" class="toggle-features">{{ featuresOpen4 ? 'Hide Features4' : 'View Features' }}</button>
      </div>-->
      <div class="accordion">
        <h2>
          <img class="icon" src="../assets/dresscode.png" />DRESS CODE
        </h2>
        <ul v-show-slide="featuresOpen6" class="features">
          <h5>
            Disclaimer
            <br />
            <br />Weather: EXTREMELY Tropical!
            <br />
            <br />Wedding Day
            <br />
            <br />The gents: The groom and groomsmen are not wearing a tux, it's not recommended that you do either unless you don't mind sweating profusely.
            <br />
            <br />The ladies: BEACHY VIBES, if you'd like to go formal no one is going to get mad at you. The ceremony and cocktail hour will be taken place at the beach (yes sand), however, the reception will be indoors. If you'd like to wear heels, wedged ones might be more practical and comfortable!
            <br />
            <br />Bamboo handheld fans will be given to everyone during the ceremony.
          </h5>
        </ul>
        <button
          @click="toggleFeatures6"
          class="toggle-features"
        >{{ featuresOpen6 ? 'Hide' : 'View' }}</button>
      </div>
      <div class="accordion">
        <h2>
          <img class="icon" src="../assets/palm.png" /> VENUE DETAILS
        </h2>
        <ul v-show-slide="featuresOpen7" class="features">
          <li>The airport to go to is Cancun International Airport (CUN)</li>
        </ul>
        <button
          @click="toggleFeatures7"
          class="toggle-features"
        >{{ featuresOpen7 ? 'Hide' : 'View' }}</button>
      </div>
      <div class="accordion">
        <h2>
          WHAT ARE THE
          <img class="icon" src="../assets/bride.png" /> PAYING?
        </h2>
        <ul v-show-slide="featuresOpen5" class="features">
          <li>The airport to go to is Cancun International Airport (CUN)</li>
        </ul>
        <button
          @click="toggleFeatures5"
          class="toggle-features"
        >{{ featuresOpen5 ? 'Hide' : 'View' }}</button>
      </div>
      <div class="accordion">
        <h2>
          <i class="fas fa-shopping-basket"></i> HOW CLOSE ARE WE TO... THINGS?
        </h2>
        <ul v-show-slide="featuresOpen9" class="features">
          <li>The airport to go to is Cancun International Airport (CUN)</li>
        </ul>
        <button
          @click="toggleFeatures9"
          class="toggle-features"
        >{{ featuresOpen9 ? 'Hide' : 'View' }}</button>
      </div>
      <div class="accordion">
        <h2>
          <i class="fas fa-suitcase"></i> WHAT TO PACK?
        </h2>
        <ul v-show-slide="featuresOpen10" class="features">
          <li>The airport to go to is Cancun International Airport (CUN)</li>
        </ul>
        <button
          @click="toggleFeatures10"
          class="toggle-features"
        >{{ featuresOpen10 ? 'Hide' : 'View' }}</button>
      </div>
      <div class="accordion">
        <h2>MISC</h2>
        <ul v-show-slide="featuresOpen11" class="features">
          <li>The airport to go to is Cancun International Airport (CUN)</li>
        </ul>
        <button
          @click="toggleFeatures11"
          class="toggle-features"
        >{{ featuresOpen11 ? 'Hide' : 'View' }}</button>
      </div>
      <div class="accordion">
        <h2>
          <i class="fas fa-lock"></i> IS IT SAFE?
        </h2>
        <ul v-show-slide="featuresOpen8" class="features">
          <li>The airport to go to is Cancun International Airport (CUN)</li>
        </ul>
        <button
          @click="toggleFeatures8"
          class="toggle-features"
        >{{ featuresOpen8 ? 'Hide' : 'View' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
      featuresOpen: false,
      featuresOpen1: false,
      featuresOpen2: false,
      featuresOpen3: false,
      featuresOpen4: false,
      featuresOpen5: false,
      featuresOpen6: false,
      featuresOpen7: false,
      featuresOpen8: false,
      featuresOpen9: false,
      featuresOpen10: false,
      featuresOpen11: false
    };
  },
  methods: {
    toggleFeatures() {
      this.featuresOpen = !this.featuresOpen;
    },
    toggleFeatures1() {
      this.featuresOpen1 = !this.featuresOpen1;
    },
    toggleFeatures2() {
      this.featuresOpen2 = !this.featuresOpen2;
    },
    toggleFeatures3() {
      this.featuresOpen3 = !this.featuresOpen3;
    },
    toggleFeatures4() {
      this.featuresOpen4 = !this.featuresOpen4;
    },
    toggleFeatures5() {
      this.featuresOpen5 = !this.featuresOpen5;
    },
    toggleFeatures6() {
      this.featuresOpen6 = !this.featuresOpen6;
    },
    toggleFeatures7() {
      this.featuresOpen7 = !this.featuresOpen7;
    },
    toggleFeatures8() {
      this.featuresOpen8 = !this.featuresOpen8;
    },
    toggleFeatures9() {
      this.featuresOpen9 = !this.featuresOpen9;
    },
    toggleFeatures10() {
      this.featuresOpen10 = !this.featuresOpen10;
    },
    toggleFeatures11() {
      this.featuresOpen11 = !this.featuresOpen11;
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.questions {
  background-image: url("../assets/stairs2.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 800px;
}

.padding-sm {
  padding-top: 100px;
}

ul {
  list-style-type: none;
  padding: 5px;
}

.accordion-grid-container {
  max-width: 80%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 20px;
  margin-right: auto;
  margin-left: auto;
  /* padding: 5% 10% 10% 10%; */
}

.accordion {
  padding-top: 20px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  /* position:relative; */
}

.accordion button {
  width: 100%;
  background-color: rgb(72, 167, 75);
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  /* position:absolute;  */
  bottom: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  /* margin-bottom: 10px; */
}

.icon {
  width: 30px;
  height: 30px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table,
th,
td {
  border: 1px solid black;
  text-align: left;
}

th {
  margin-top: 0;
  height: 50px;
  padding: 10px;
}

td {
  height: 35px;
  padding: 10px;
}

tr:nth-child(odd) {
  background-color: #f2f2f2;
}

.passport h5 {
  font-weight: bold;
}

.passport {
  padding-bottom: 15px;
}

.overlay {
  background-color:rgba(194, 159, 145, 0.4);
  height: 800px;
}

.intro {
  font-size: 38px;
  color: white;
  font-weight: bold;
  letter-spacing: 15px;
  opacity: 0.7;
}
</style>
