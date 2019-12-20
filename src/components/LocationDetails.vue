<template>
  <div class="locationDetails">
    <div class="between-1">
      <div class="intro background-img-720">
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br />
        <h1>{{ msg }}</h1>
        <h3>An authentic Mexican Resort Hotel</h3>
      </div>
    </div>
    <h2>Amenities</h2>
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
      <P>At Mahekal Beach Resort, guests enjoy an "unplugged"-style vacation experience: guestrooms do not come with TVs, 
        but they do include state-of-the-art Wi-Fi access and a service-focused telephone system directly connected to 
        on-property services. </P>
        <br>
    </div>
    <div class="mahekal-accommodation">
      <h1>ACCOMMODATION</h1>
      <div class="accommodation">
        <div class="garden-view">
          <img src="../assets/garden-view.jpg"/>
        </div>
        <div class="ocean-view">
          <img src="../assets/ocean-view.jpg"/>
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
              <gmap-info-window :position="{lat:20.6332531, lng:-87.06455497}">
                <div class="infoWindow">
                  <h4>Mahekal Beach Resort</h4>
                  <p>
                    Calle 38, Entre Avenida 5a Y Zona Federal Maritima,
                    <br />Centro, 77710
                    <br />Playa del Carmen, Q.R., Mexico
                    <br />
                    <a href="https://www.mahekalbeachresort.com/">Mahekal</a>
                  </p>
                </div>
              </gmap-info-window>
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
.infoWindow {
  font-size: 10px;
  
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
}
.garden-view, .ocean-view {
  display: inline-block;
  width: 50%;
}
.mahekal-accommodation {
  background-image: url("../assets/brick-wall.png");
  background-color: #fe7433;
  opacity: 0.9;
  background-attachment: fixed;
}
.mahekal-accommodation h1 {
  padding-top: 3%;
  padding-bottom: 3%;
  font-size: 45px;
}
.intro-accommodation p {
  padding: 6% 5% 6% 5%;
  font-size: 16px;
}

</style>