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
      <router-link to="/itinerary">Itinerary</router-link>  
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
</style>
