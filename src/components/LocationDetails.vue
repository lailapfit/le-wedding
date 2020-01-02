<template>
  <div class="locationDetails">
    <div class="between-1">
      <div class="intro background-img-800">
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br />
        <h1>{{ msg }}</h1>
        <h3>An authentic Mexican Resort Hotel</h3>
      </div>
    </div>
    <h2>AMENITIES</h2>
    <table class="amenities">
      <tr>
        <th><img src="../assets/beach.png"></th>
        <th><img src="../assets/pool.png"></th>
        <th><img src="../assets/spoon.png"></th>
        <th><img src="../assets/artist.png"></th>
      </tr>
      <tr>
        <td>BEACH <br> FRONT</td>
        <td>4 <br> POOLS</td>
        <td>4 <br> RESTAURANTS</td>
        <td>POTTERY <br> PAINTING</td>
      </tr>
      <br>
      <tr>
        <th><img src="../assets/facial-mask.png"></th>
        <th><img src="../assets/shop.png"></th>
        <th><img src="../assets/food-and-restaurant.png"></th>
        <th><img src="../assets/snorkel.png"></th>
      </tr>
      <tr>
        <td>REVIVE <br> SPA</td>
        <td>ICE-CREAM SHOP</td>
        <td>3 <br> BARS</td>
        <td>DIVE-CENTER</td>
      </tr>
      <br>
    </table>

    <div class="mahekal background-img-720"></div>
    <div class="intro-accommodation">
      <br>
      <i class="fas fa-ellipsis-h"></i>
      <P>At Mahekal Beach Resort, guests enjoy an <strong>"unplugged"</strong>-style vacation experience. <br>Guestrooms do not come with TVs, <br>
        but they do include state-of-the-art Wi-Fi access and a service-focused telephone system directly connected to 
        on-property services. </P>
        <br>
       <i class="fas fa-ellipsis-h"></i>
       <br><br>
      <h2>ACCOMMODATION</h2>
    </div>
    <div class="mahekal-accommodation">
      <div class="accommodation">
        <div class="garden-view">
          <div class="image-container">
            <img src="../assets/garden-view.jpg"/>
            <div class="image-content">Garden View</div>
          </div>
          <p>
            <i class="fas fa-child fa-4x"></i><i class="fas fa-child fa-4x"></i><i class="fas fa-plus fa-sm"></i><i class="fas fa-child fa-2x"></i><i class="fas fa-equals fa-sm"></i><span style="font-size: 30px; padding-left: 0.5em;"><strong style="color: white">$262.11</strong></span><span>per night</span><br>
            <i class="fas fa-angle-right fa-sm"></i> 2 adults and 1 child (4 yrs and younger)<br>
          </p>
          <p>
            <span class="accommodation-header">max occupancy </span><i class="fas fa-angle-double-left"></i>double: 4 | king: 3<i class="fas fa-angle-double-right"></i><br><i class="fas fa-plus fa-sm"></i> 1 adult = $112 + taxes per night<br> 
             <i class="fas fa-plus fa-sm"></i> 1 child (age 6 -12) = $64 + taxes per night
          </p>
          <p>
            <span class="accommodation-header">what is included?</span><br><i class="fas fa-coffee fa-xs"></i><span style="padding-left: 0.5em">breakfast buffet<br></span><i class="fas fa-utensils fa-xs"></i><span style="padding-left: 0.5em"> lunch <strong>/</strong> dinner a la cart</span><br>
              ** <i class="fas fa-glass-martini-alt fa-xs"></i> excluded
          </p>
          <p>
            <i class="fas fa-info-circle"></i> For more information, visit <a href="https://www.mahekalbeachresort.com/accommodations" target="_blank">Mahekal</a>
          </p>
        </div>
        <div class="ocean-view">
          <div class="image-container">
            <img src="../assets/ocean-view.jpg"/>
            <div class="image-content">Ocean View</div>
          </div>
          <p>
            <i class="fas fa-child fa-4x"></i><i class="fas fa-child fa-4x"></i><i class="fas fa-plus fa-sm"></i><i class="fas fa-child fa-2x"></i><i class="fas fa-equals fa-sm"></i><span style="font-size: 30px; padding-left: 0.5em;"><strong style="color: white">$393.01</strong></span><span>per night</span><br>
             <i class="fas fa-angle-right fa-sm"></i> 2 adults and 1 child (4 yrs and younger)<br>
          </p>
          <p>
            <span class="accommodation-header">max occupancy </span><i class="fas fa-angle-double-left"></i>double: 4 | king: 3<i class="fas fa-angle-double-right"></i><br><i class="fas fa-plus fa-sm"></i> 1 adult = $112 + taxes per night<br> 
             <i class="fas fa-plus fa-sm"></i> 1 child (age 6 -12) = $64 + taxes per night
          </p>
          <p>
              <span class="accommodation-header">what is included?</span><br>
              <i class="fas fa-coffee fa-xs"></i><span style="padding-left: 0.5em">breakfast buffet<br></span><i class="fas fa-utensils fa-xs"></i><span style="padding-left: 0.5em"> lunch <strong>/</strong> dinner a la cart</span><br>
               ** <i class="fas fa-glass-martini-alt fa-xs"></i> excluded
          </p>
          <p>
            <i class="fas fa-info-circle"></i> For more information, visit <a href="https://www.mahekalbeachresort.com/accommodations" target="_blank">Mahekal</a>
          </p>
        </div>
        <div class="book-now">
          <button class="book-now-bttn" onclick="window.open('https://reservations.travelclick.com/85296?groupID=2466922#/guestsandrooms')">BOOK NOW</button>
        </div>
      </div>
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
              <gmap-info-window :position="{lat:20.6332531, lng:-87.06455497}" >
                <div class="infoWindow">
                  <p>
                    <!-- Calle 38, Entre Avenida 5a Y Zona Federal Maritima,
                    <br />Centro, 77710
                    <br />Playa del Carmen, Q.R., Mexico
                    <br /> -->
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

export default {
  name: "LocationDetails",
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: 'Oswald', sans-serif;
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

/* rgba(0,0,0,0.5) */
.intro {
  background-image: url("../assets/mahekal.jpg"),
    linear-gradient(rgba(248, 246, 246, 0.5), rgba(52, 77, 190, 0.5));
  background-blend-mode: overlay;
}

.mahekal {
  background-image: url("../assets/bienvenidos.jpg");
}

.background-img-720 {
  background-size: cover;
  background-attachment: fixed;
  height: 720px;
  background-position: center;
}

.background-img-800 {
  background-size: cover;
  background-attachment: fixed;
  height: 800px;
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

table img {
  width: 75px;
  height: 75px;
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

.amenities {
  padding-left: 15%;
  padding-right: 15%;
}

.accommodation img {
  width: 95%;
  padding-top: 2%;
}

.garden-view, .ocean-view {
  display: inline-block;
  width: 45%;
  margin: 2% 2% 2% 2%;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0);
  background-color:rgba(255, 255, 255, 0.23);
}

.mahekal-accommodation {
  background-image: url("../assets/brick-wall.png");
  background-color: #33BDFE;
  opacity: 0.9;
  background-attachment: fixed;
  margin-top: 2%;
}

.intro-accommodation p {
  padding: 6% 5% 6% 5%;
  font-size: 16px;
}

.image-container {
  position: relative;
  text-align: center;
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
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 18px;
  cursor: pointer;
  width: 95%;
}

.book-now-bttn:hover {
  background-color: #fe925f;
}

.book-now {
  margin-bottom: 2%;
  padding-bottom: 2%;
}

.accommodation-header {
  font-size:26px; 
  color: white;
}

</style>