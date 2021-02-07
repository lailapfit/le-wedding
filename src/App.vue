<template>
  <div id="app">
       <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <fixed-header>
    <nav class="navbar">
      <router-link class="col-auto mr-auto" to="/">Laila & Cuong</router-link>
      <div id="navbar-right" class="col-auto">        
      <router-link to="/"> Welcome |</router-link>
      <router-link to="/location"> Venue |</router-link>
      <router-link to="/rsvp"> RSVP |</router-link>
      <router-link to="/faq"> FAQ |</router-link> 
      </div>
     <div id="hamburger" class="dropdown" style="display:none">
       <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
       <i class="fas fa-bars"></i></button>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <router-link class="dropdown-item" to="/">Welcome</router-link>
          <router-link class="dropdown-item" to="/location">Venue</router-link>
          <router-link class="dropdown-item" to="/rsvp">RSVP</router-link>
          <router-link class="dropdown-item" to="/faq">FAQ</router-link>
          <router-link class="dropdown-item" to="/utility">Budget</router-link>
        </div>
     </div>
    </nav>
    </fixed-header>
     <router-view />
  </div>
</template>

<script>
import FixedHeader from 'vue-fixed-header'
 
export default {
  components: {
    FixedHeader
  },
  methods: {
    displayHamburger() {
       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          let hamburger = document.getElementById('hamburger');
          hamburger.style.display = "block";
          let navbar = document.getElementById('navbar-right');
          navbar.style.display = "none";
        } else {
          let hamburger = document.getElementById('hamburger');
          hamburger.style.display = "none";
          let navbar = document.getElementById('navbar-right');
          navbar.style.display = "block";
        }
    }
  },
  created: function() {
    window.addEventListener('scroll', this.displayHamburger);
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.displayHamburger);
  }
}
</script> 

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* rgba(57, 87, 61) */
}
.navbar {
  color: #99621E;
  font-size: 14px;
  font-weight: bold;
  width: 100vw;
}

.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  /* display: grid; */
}

.navbar a {
  font-weight: bold;
  color: #D38B5D;
  text-decoration: none;
  font-size: 14px;
}

/* .navbar a:first-child {
  padding-left: 60%;
} */

.navbar a.router-link-exact-active {
  color: #99621E;
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  width: 80px;
}
.agile__nav-button--prev:hover {
  padding-right: 2%;
}

.agile__nav-button--next:hover {
  padding-left: 2%;
} 

.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
.agile__dots {
  bottom: 2px;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: #fff;
}

.slide {
  display: block;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  width: 100%;
}

span.addeventatc_icon.atc_node.notranslate {
  background-image: none;
}

span.rsvp-bttn.atc_node.notranslate {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.btn-secondary {
  background-color: transparent;
}

.navbar {
  float: left;  
}

#dropdownMenuButton {
  background-color: #D38B5D;
  opacity: 0.7;
  color: white;
}

</style>
