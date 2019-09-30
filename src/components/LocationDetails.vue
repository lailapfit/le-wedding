<template>
  <div class="locationDetails">
    <div class="between-1">
      <div class="intro background-img-720">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>{{ msg }}</h1>
        <h3>An authentic Mexican Resort Hotel</h3>
      </div>
    </div>
    <h2>Amenities</h2>
    <table>
      <tr>
        <th>1</th>&nbsp;
        <th>4</th>
        <th>3</th>
        <th>1</th>&nbsp;&nbsp;
        <th>1</th>
        <th>1</th>
        <th>3</th>
        <th>1</th>
      </tr>
      <tr>
        <td>BEACH</td>&nbsp;
        <td>POOLS</td>
        <td>RESTAURANTS</td>
        <td>POTTERY</td>&nbsp;&nbsp;
        <td>SPA</td>
        <td>ICE-CREAM SHOP</td>
        <td>BARS</td>
        <td>DIVE-CENTER</td>
      </tr>
    </table>

    <div class="mahekal background-img-720"></div>
    <div>
      <table>
        <tr>
          <th></th>
          <th>Search and add a pin</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <p>
              Mahekal's Address:
              <br />Calle 38, Entre Avenida 5a Y Zona Federal Maritima,
              <br />Centro, 77710
              <br />Playa del Carmen, Q.R., Mexico
            </p>
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
            <p>
              CUN
              <br />Calle 38, Entre Avenida 5a Y Zona Federal Maritima,
              <br />Centro, 77710
              <br />Playa del Carmen, Q.R., Mexico
            </p>
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
  name: "locationDetails",
  data: () => {
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
    }
  },
  geolocate: function() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  },

  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  background: rgba(240, 142, 14, 0.8);
}
.background-img-720 {
  background-size: cover;
  background-attachment: fixed;
  height: 720px;
  background-position: center;
}
table {
  width: 100%;
}
</style>