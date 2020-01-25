<template>
  <div id="app">
       <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <div id="nav">
     Laila & Cuong
     <router-link to="/">Welcome</router-link> |
      <router-link to="/location">Location</router-link>  |
      <router-link to="/rsvp">RSVP</router-link>  |
      <!-- <router-link to="/accommodation">Accommodation</router-link> |  -->
      <router-link to="/localknowledge"> Local Knowledge</router-link>  |
      <router-link to="/itinerary">Itinerary</router-link>   |
      <router-link to="/faq">FAQ</router-link>   |
      <router-link to="/utility">Calculator</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding-top: 2%;
  padding-bottom: 1%;
}
#nav a {
  font-weight: bold;
  color: #1C95E3;
  text-decoration: none;
}

#nav a:first-child {
  padding-left: 60%;
}

#nav a.router-link-exact-active {
  color: black;
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

</style>
