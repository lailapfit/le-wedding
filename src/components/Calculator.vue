<template>
<div class="calculator">
    <h1>{{ msg }}</h1>
    <div class="budget-container">
        <form id="budget">
            <label for="travelers">Including yourself, how many travelers will you be covering expenses for?</label>
            <input type="number" name="travelers" value="2"><br>
            <!-- <h2>Accommodation</h2> -->
            <label for="flight">What is the estimation for airfare?</label>
            <input type="text" name="flight"><br>
            <label for="stay">How many days will you be staying? </label>
            <input type="number" name="stay" value="3"><br>
            <label for="resort" >Where will you be staying? </label>
            <ul @click="resortCost()">
                <li>
                    <label for="mahekal"><input type="radio" name="resort" value="mahekal-garden-view">Mahekal - Garden View</label>
                </li>
                <li>
                    <label for="mahekal"><input type="radio" name="resort" value="mahekal-ocean-view">Mahekal - Ocean View</label>
                </li>
                <li>
                    <label for="hyatt"><input type="radio" name="resort" value="hyatt-king">Grand Hyatt - King</label>
                </li>
                <li>
                    <label for="hyatt"><input type="radio" name="resort" value="hyatt-queen">Grand Hyatt-Queen</label>
                </li>
                <li>
                    <label for="other"><input type="radio" name="resort" value="other">Other</label>
                    <div class="other-self-input" style="display: none;">
                        <label for="otherSelfInput">Please specify: $</label><input type="text" name="otherSelfInput">
                        <button type="button" id="updateOtherButton" @click="isClicked = true; updateOtherCost();"  v-on:submit.prevent="onSubmit">Update</button>
                    </div>
                </li>
            </ul>
            <label for="resortCost">Cost per night: </label>
            <input type="text" name="resortCost"><br>
            <label for="misc"></label>
            <label for="totalCost">Total Cost: $</label>
            <input type="text" name="totalCost"><br>
        </form>
    </div>
</div>
</template>

<script>
export default {
 name: "calculator",
 data: function() {
     return {
         isClicked: false
     }
     
 },
  props: {
    msg: String
  },
  methods: {
       updateOtherCost() {
          let form = document.forms['budget'];
          let other = (form.elements['otherSelfInput']).value;
          console.log('other value ' + other);
          return other;
      },
      resortCost() {
          let budgetTotal = 0;

          let form = document.forms['budget'];
          let resort = form.elements['resort'];
          let flight = form.elements['flight'].value;
          let travelers = form.elements['travelers'].value; 

        //   let displayOther = function() {
        //     let otherSelfInput = document.querySelector('.other-self-input');
        //     otherSelfInput.style.display = 'block';
        //     let other = (form.elements['otherSelfInput']).value;
        //     console.log('other value ' + other);
        //     return other;
        //   }

          let resortCosts = new Array();
          resortCosts["mahekal-garden-view"] = 262.11;
          resortCosts["mahekal-ocean-view"] = 393.01;
          resortCosts["hyatt-king"] = 220.45;
          resortCosts["hyatt-queen"] = 242.27;
          resortCosts["other"] = 0;
          
          let totalCost = function(costPerNight, flight, travelers) {
            
            let totalCost = 0;
            let roomTotalCost = 0;
            let flightTotalCost = 0;

            let lengthOfStay = form.elements['stay'].value;
            console.log("stay >>> " + lengthOfStay);

            let totalCostInput = form.elements['totalCost'];

            if(lengthOfStay !== 0 && flight !== 0 && travelers !== 0) {
                roomTotalCost = costPerNight * lengthOfStay;
                flightTotalCost = flight * travelers;

                totalCost = (roomTotalCost + flightTotalCost).toFixed(2);
                console.log("Total Cost >>> " + totalCost);

                totalCostInput.value = "$" + totalCost;
            } else if(lengthOfStay !== 0 && flight !== 0) {
                totalCost = (costPerNight * lengthOfStay).toFixed(2);
                console.log("Total Cost >>> " + totalCost);
                totalCostInput.value = "$" + totalCost;
            }
            return totalCost;
        }

        let costInput = form.elements['resortCost'];
          let i=0;
          for(i; i<resort.length; i++) {
             if(resort[i].checked) {
                 if(resort[i].value === 'other') {
                   let otherSelfInput = document.querySelector('.other-self-input');
                   otherSelfInput.style.display = 'block';
                 }
                 if(this.isClicked) {
                     console.log('checked (other button click) >>> ' + resort[i]);
                     let otherUpdateCost = this.updateOtherCost();
                     budgetTotal = otherUpdateCost;
                     this.isClicked = false;
                 } else {
                    console.log('checked >>> ' + resort[i]);
                    budgetTotal = (resortCosts[resort[i].value]).toFixed(2); 
                 } 
                  costInput.value = budgetTotal;
                  console.log('value >>> ' + budgetTotal);
                  totalCost(budgetTotal, flight, travelers); 
              } 
          }
          return budgetTotal;
      }
  }
};
</script>

<style scoped>
h1 {
    color: black;
}

ul {
    list-style-type: none;
}
</style>