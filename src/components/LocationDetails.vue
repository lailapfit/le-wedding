<template>
  <div class="locationDetails">
    <div class="between-1">
      <div class="intro background-img-720">
        <div class="center">
          <h1 class="intro-text">{{ msg }}</h1>
          <router-link class="button rsvp-button" to="/rsvp">RSVP</router-link>
        </div>
      </div>
    </div>
    <h2>AMENITIES</h2>
    <div class="amenities">
      <div class="amenities-first">
        <img src="../assets/beach.png" />
        <br />
        <span>BEACH FRONT</span>
      </div>
      <div>
        <img src="../assets/pool.png" />
        <br />
        <span>4 POOLS</span>
      </div>
      <div>
        <img src="../assets/spoon.png" />
        <br />
        <span>4 RESTAURANTS</span>
      </div>
      <div>
        <img src="../assets/artist.png" />
        <br />
        <span>POTTERY PAINTING</span>
      </div>
      <div>
        <img src="../assets/facial-mask.png" />
        <br />
        <span>REVIVE SPA</span>
      </div>
      <div>
        <img src="../assets/shop.png" />
        <br />
        <span>ICE-CREAM SHOP</span>
      </div>
      <div>
        <img src="../assets/food-and-restaurant.png" />
        <br />
        <span>3 BARS</span>
      </div>
      <div>
        <img src="../assets/snorkel.png" />
        <br />
        <span>DIVE-CENTER</span>
      </div>
    </div>

    <div class="mahekal background-img-720"></div>
    <div class="intro-accommodation">
      <br />
      <i class="fas fa-ellipsis-h"></i>
      <P>
        At Mahekal Beach Resort, guests enjoy an
        <strong>"unplugged"</strong>-style vacation experience.
        <br />Guestrooms do not come with TVs,
        <br />but they do include state-of-the-art Wi-Fi access, AC, and a service-focused telephone system directly connected to
        on-property services.
      </P>
      <br />
      <i class="fas fa-ellipsis-h"></i>
      <br />
      <br />
      <!-- <h2>ACCOMMODATION</h2> -->
    </div>
    <agile>
      <div class="mahekal-accommodation slide">
        <div class="accommodation">
          <h3>
            ACCOMMODATION
            <span style="color: black;">#MAHEKAL</span>
          </h3>
          <div class="garden-view">
            <!-- <h3>M A H E K A L</h3> -->
            <div class="image-container">
              <img src="../assets/garden-view.jpg" />
              <div class="image-content">Garden View</div>
            </div>
            <p>
              <i class="fas fa-child fa-4x"></i>
              <i class="fas fa-child fa-4x"></i>
              <i class="fas fa-plus fa-sm"></i>
              <i class="fas fa-child fa-2x"></i>
              <i class="fas fa-equals fa-sm"></i>
              <span class="accommodation-prices accommodation-padding">
                <strong>$262.11</strong>
              </span>
              <span>per night</span>
              <br />
              <i class="fas fa-angle-right fa-sm"></i> 2 adults and 1 child (4 yrs and younger)
              <br />
            </p>
            <p>
              <span class="accommodation-header">max occupancy</span>
              <i class="fas fa-angle-double-left"></i>double: 4 | king: 3
              <i class="fas fa-angle-double-right"></i>
              <br />
              <i class="fas fa-plus fa-sm"></i> 1 adult = $112 + taxes per night
              <br />
              <i class="fas fa-plus fa-sm"></i> 1 child (age 6 -12) = $64 + taxes per night
            </p>
            <p>
              <span class="accommodation-header">what is included?</span>
              <br />
              <i class="fas fa-coffee fa-xs"></i>
              <span class="accommodation-padding">
                breakfast buffet
                <br />
              </span>
              <i class="fas fa-utensils fa-xs"></i>
              <span class="accommodation-padding">
                lunch
                <strong>/</strong> dinner a la cart
              </span>
              <br />**
              <i class="fas fa-glass-martini-alt fa-xs"></i> excluded
            </p>
            <p>
              <i class="fas fa-info-circle"></i> For more information, visit
              <a href="https://www.mahekalbeachresort.com/accommodations" target="_blank">Mahekal</a>
            </p>
          </div>
          <div class="ocean-view">
            <!-- <h3>M A H E K A L</h3> -->
            <div class="image-container">
              <img src="../assets/ocean-view.jpg" />
              <div class="image-content">Ocean View</div>
            </div>
            <p>
              <i class="fas fa-child fa-4x"></i>
              <i class="fas fa-child fa-4x"></i>
              <i class="fas fa-plus fa-sm"></i>
              <i class="fas fa-child fa-2x"></i>
              <i class="fas fa-equals fa-sm"></i>
              <span class="accommodation-prices accommodation-padding">
                <strong>$393.01</strong>
              </span>
              <span>per night</span>
              <br />
              <i class="fas fa-angle-right fa-sm"></i> 2 adults and 1 child (4 yrs and younger)
              <br />
            </p>
            <p>
              <span class="accommodation-header">max occupancy</span>
              <i class="fas fa-angle-double-left"></i>double: 4 | king: 3
              <i class="fas fa-angle-double-right"></i>
              <br />
              <i class="fas fa-plus fa-sm"></i> 1 adult = $112 + taxes per night
              <br />
              <i class="fas fa-plus fa-sm"></i> 1 child (age 6 -12) = $64 + taxes per night
            </p>
            <p>
              <span class="accommodation-header">what is included?</span>
              <br />
              <i class="fas fa-coffee fa-xs"></i>
              <span class="accommodation-padding">
                breakfast buffet
                <br />
              </span>
              <i class="fas fa-utensils fa-xs"></i>
              <span class="accommodation-padding">
                lunch
                <strong>/</strong> dinner a la cart
              </span>
              <br />**
              <i class="fas fa-glass-martini-alt fa-xs"></i> excluded
            </p>
            <p>
              <i class="fas fa-info-circle"></i> For more information, visit
              <a href="https://www.mahekalbeachresort.com/accommodations" target="_blank">Mahekal</a>
            </p>
          </div>
          <div class="book-now">
            <button
              class="book-now-bttn"
              onclick="window.open('https://reservations.travelclick.com/85296?groupID=2833024&hotelID=85296#/datesofstay')"
            >BOOK NOW</button>
          </div>
        </div>
      </div>
      <div class="slide mahekal-accommodation">
        <h3>
          ACCOMMODATION
          <span style="color: black;">#GRANDHYATT</span>
        </h3>
        <div class="grand-hyatt">
          <div class="image-container">
            <img
              class="king-hyatt"
              src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/08/21/0856/Grand-Hyatt-Playa-Del-Carmen-Resort-P284-Plunge-Pool-Suite.jpg/Grand-Hyatt-Playa-Del-Carmen-Resort-P284-Plunge-Pool-Suite.16x9.jpg"
            />
            <div class="image-content">King</div>
          </div>
          <div>
            <p>
              <i class="fas fa-child fa-4x"></i>
              <i class="fas fa-plus fa-sm"></i>
              <i class="fas fa-child fa-4x"></i>
              <i class="fas fa-equals fa-sm"></i>
              <span class="accommodation-padding">starting</span>
              <span class="accommodation-prices">
                <strong>$220.45</strong>
              </span>
              <span>per night</span>
              <br />(taxes & fees included)
              <br />
              <i class="fas fa-angle-right fa-sm"></i> 2 adults. Children over 12 years or older are considered an adult.
              <br />
            </p>
            <p>
              <span class="accommodation-header">what is included?</span>
              <br />
              <span>
                price above is room only, however, the following are available:
                <br />
              </span>
              <i class="fas fa-coffee fa-xs"></i>
              <span class="accommodation-padding">
                bed and breakfast = starting $263.29 per night
                <br />
              </span>
              <i class="fas fa-utensils fa-xs"></i>
              <i class="fas fa-glass-martini-alt fa-xs"></i>
              <span class="accommodation-padding">all inclusive = starting $430.04 per night</span>
              <br />
            </p>
            <p>
              <span class="accommodation-header">how far from the venue?</span>
              <br />
              <i class="fas fa-walking"></i>
              <span class="accommodation-padding">
                11-15 min
                <br />
              </span>
              <i class="fas fa-car-side"></i>
              <span class="accommodation-padding">8 min</span>
            </p>
            <p>
              <i class="fas fa-info-circle"></i> For more information, visit
              <a
                href="https://www.hyatt.com/en-US/hotel/mexico/grand-hyatt-playa-del-carmen-resort/cunpc"
                target="_blank"
              >Grand Hyatt</a>
            </p>
          </div>
        </div>
        <div class="grand-hyatt">
          <div class="image-container">
            <img src="../assets/hyatt-double.jpeg" />
            <div class="image-content">Queen</div>
          </div>
          <div>
            <p>
              <i class="fas fa-child fa-4x"></i>
              <i class="fas fa-plus fa-sm"></i>
              <i class="fas fa-child fa-4x"></i>
              <i class="fas fa-equals fa-sm"></i>
              <span class="accommodation-padding">starting</span>
              <span class="accommodation-prices">
                <strong>$242.27</strong>
              </span>
              <span>per night</span>
              <br />(taxes & fees included)
              <br />
              <i class="fas fa-angle-right fa-sm"></i> 2 adults. Children over 12 years or older are considered an adult.
              <br />
            </p>
            <p>
              <span class="accommodation-header">what is included?</span>
              <br />
              <span>
                price above is room only, however, the following are available:
                <br />
              </span>
              <i class="fas fa-coffee fa-xs"></i>
              <span class="accommodation-padding">
                bed and breakfast = starting $285.11 per night
                <br />
              </span>
              <i class="fas fa-utensils fa-xs"></i>
              <i class="fas fa-glass-martini-alt fa-xs"></i>
              <span class="accommodation-padding">all inclusive = starting $449.67 per night</span>
              <br />
            </p>
            <p>
              <span class="accommodation-header">how far from the venue?</span>
              <br />
              <i class="fas fa-walking"></i>
              <span class="accommodation-padding">
                11-15 min
                <br />
              </span>
              <i class="fas fa-car-side"></i>
              <span class="accommodation-padding">8 min</span>
            </p>
            <p>
              <i class="fas fa-info-circle"></i> For more information, visit
              <a
                href="https://www.hyatt.com/en-US/hotel/mexico/grand-hyatt-playa-del-carmen-resort/cunpc"
                target="_blank"
              >Grand Hyatt</a>
            </p>
          </div>
        </div>
        <div class="book-now">
          <button
            class="book-now-bttn"
            onclick="window.open('https://www.hyatt.com/en-US/hotel/mexico/grand-hyatt-playa-del-carmen-resort/cunpc/rooms')"
          >BOOK NOW</button>
        </div>
      </div>
      <div class="slide mahekal-accommodation">
        <div class="other-req">
          <h3>
            ACCOMMODATION
            <span style="color: black;">#AIRBNB</span>
          </h3>
          <div class="image-container">
            <img src="../assets/airbnb.jpg" />
            <div class="image-content">Private Room/Apt</div>
          </div>
          <p>
            <i class="fas fa-child fa-4x"></i>
            <i class="fas fa-child fa-4x"></i>(
            <i class="fas fa-plus fa-sm"></i>)
            <i class="fas fa-equals fa-sm"></i>
            <span class="accommodation-prices accommodation-padding">
              <strong>$16 - $99</strong>
            </span>
            <span>per night</span>
            <br />(taxes & fees not included)
            <br />
            <i class="fas fa-angle-right fa-sm"></i> 2 adults or more.
            <br />
          </p>
          <p>
            <span class="accommodation-header">what is included?</span>
            <br />
            <span>
              varies per listing,
              <br />but may include private pool!
            </span>
            <!-- <i class="fas fa-coffee fa-xs"></i><span class="accommodation-padding">bed and breakfast = starting $285.11 per night <br></span><i class="fas fa-utensils fa-xs"></i><i class="fas fa-glass-martini-alt fa-xs"></i><span class="accommodation-padding"> all inclusive = starting $449.67 per night</span><br> -->
          </p>
          <p>
            <span class="accommodation-header">**please book according to reviews</span>
            <br />
          </p>
          <p>
            <i class="fas fa-info-circle"></i> For more information, visit
            <a
              href="https://www.airbnb.com/s/Playa-del-Carmen--Mexico/homes?adults=2&children=0&checkin=2020-09-04&checkout=2020-09-07&source=mc_search_bar&click_referer=t%3ASEE_ALL%7Csid%3A52824cbb-9676-4103-ba3b-21bc791b3083%7Cst%3ALANDING_PAGE_MARQUEE&title_type=NONE&refinement_paths%5B%5D=%2Fhomes"
              target="_blank"
            >airbnb</a>
          </p>
          <div class="book-now">
            <button
              class="book-now-bttn"
              onclick="window.open('https://www.airbnb.com/s/Playa-del-Carmen--Mexico/homes?adults=2&children=0&checkin=2020-09-04&checkout=2020-09-07&source=mc_search_bar&click_referer=t%3ASEE_ALL%7Csid%3A52824cbb-9676-4103-ba3b-21bc791b3083%7Cst%3ALANDING_PAGE_MARQUEE&title_type=NONE&refinement_paths%5B%5D=%2Fhomes')"
            >SEARCH NOW</button>
          </div>
        </div>
      </div>
      <template slot="prevButton">
        <i class="fas fa-angle-double-left"></i>
      </template>
      <template slot="nextButton">
        <i class="fas fa-angle-double-right"></i>
      </template>
    </agile>

    <div>
      
    </div>

    <div>
      <table>
        <tr>
          <th></th>
          <th>Search and add a pin</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <br />
          </td>
          <td>
            <label>
              <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
              <button @click="addMarker">Add</button>
            </label>
            <gmap-map :center="center" :zoom="9" style="margin: auto; width: 500px; height: 300px">
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center=m.position"
              ></gmap-marker>
              <div class="gmap">
                <gmap-info-window :position="{lat:20.6332531, lng:-87.06455497}">
                  <div class="infoWindow">
                    <p>
                      <a href="https://www.mahekalbeachresort.com/">Mahekal Beach Resort</a>
                    </p>
                  </div>
                </gmap-info-window>
              </div>
              <gmap-info-window :position="{lat:21.0406321, lng:-86.87131446}">
                <div class="infoWindow">
                  <p>Cancun International Airport</p>
                </div>
              </gmap-info-window>
            </gmap-map>
          </td>
          <td>
            <br />
          </td>
        </tr>
      </table>
    </div>
    <!-- <gmap-map
  :center="{lat:20.6332531, lng:-87.06455497}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
  <-- <gmap-marker :position="{lat:20.6332531, lng:-87.06455497}" 
  :key="index" 
  v-for="(m, index) in markers" 
  :clickable="true" 
  :draggable="true" 
  @click="center=m.position"></gmap-marker>
  <gmap-info-window :position="{lat:20.6332531, lng:-87.06455497}"></gmap-info-window>
    </gmap-map>-->
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "LocationDetails",
  components: {
    agile: VueAgile
  },
  data() {
    return {
      center: { lat: 21.1617854, lng: -86.8510468 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  font-family: "Oswald", sans-serif;
}

.locationDetails {
  background-image: url("../assets/noise.png");
}

.infoWindow {
  font-size: 10px;
}

.gmap {
  opacity: 0.2;
}

h1,
h3 {
  color: white;
}

.intro {
  background-image: url("../assets/centre.jpg");
  /* linear-gradient(rgba(248, 246, 246, 0.5), rgba(52, 77, 190, 0.5)); */
  /* background-blend-mode: overlay; */
}

.mahekal {
  background-image: url("../assets/hilda.jpg");
}

.background-img-720 {
  background-size: cover;
  background-attachment: fixed;
  height: 720px;
  background-position: center;
}

.map img {
  max-width: 100%;
  height: auto;
}

table {
  width: 100%;
  padding: 2%;
}

.amenities img {
  width: 50%;
  height: 75%;
}

.map-container {
  background-size: cover;
  position: relative;
}

.map-container canvas {
  position: absolute;
}

.map-container img {
  opacity: 0;
  position: absolute;
}

#red:hover {
  background-color: red;
}

.accommodation img,
.image-container img {
  width: 90%;
  padding-top: 2%;
}

.king-hyatt {
  height: 270px;
}

.mahekal-accommodation {
  /* background-image: url("../assets/brick-wall.png"); */
  background-color: #d38b5d;
  /* opacity: 0.9;   */
  margin-left: auto;
  margin-right: auto;
}

.garden-view,
.ocean-view,
.grand-hyatt,
.other-req {
  display: inline-block;
  width: 45%;
  margin: 1% 2% 1% 2%;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 0.23);
}

.intro-accommodation p {
  padding: 6% 5% 6% 5%;
  font-size: 16px;
}

.image-container {
  position: relative;
  text-align: center;
  margin-bottom: 1%;
}

.image-content {
  position: absolute; /* Position the background text */
  bottom: 0; /* At the bottom. Use top:0 to append it to the top */
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: rgba(255, 255, 255, 0.8);
  width: 100%;
  padding-top: 20px;
  letter-spacing: 5px;
  font-size: 20px;
}

a {
  text-decoration: none;
  color: #d14401;
}

.book-now-bttn {
  background-color: #1e90ff;
  opacity: 0.9;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 18px;
  cursor: pointer;
  width: 95%;
}

.book-now-bttn:hover {
  background-color: white;
  color: #1e90ff;
}

.book-now {
  margin-bottom: 1%;
  padding-bottom: 1%;
}

.accommodation-header {
  font-size: 26px;
  color: white;
}

.accommodation-prices {
  font-size: 30px;
  color: white;
}

.accommodation-padding {
  padding-left: 0.5em;
}

.amenities {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.amenities div {
  width: 15%;
  height: 15%;
  margin: 3%;
}

.center {
  display: inline-block;
  padding-top: 22%;
  padding-right: 38%;
}

.center h1 {
    color: #d14401;
    text-align: left;
    letter-spacing: 5px;
    opacity: 0.5;
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

.rsvp-button {
    margin-top: 5%;
    padding: 5px 25px;
    font-size: 14px;
}

.intro-text {
  font-size: 40px;
}

.agile {
  margin-bottom: 2%;
}

@media screen and (max-width: 428px) { 
  .accommodation-header, .accommodation-prices {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
  .intro-text {
    margin-left: 8%;
  }
  .king-hyatt {
    height: auto;
  }
  .mahekal-accommodation {
    padding: 2% 0 4% 0;
  }
  .agile__nav-button {
    display: none;
  }
  .agile__dots {
    bottom: 3%;
  }
}

@media screen and (max-width: 360px) { 
  .accommodation-header, .accommodation-prices {
    font-size: calc(14px + 6 * ((100vw - 320px) / 680));
  }
}
</style>