<template>
  <div class="calculator">
    <div class="intro">
      <span>{{ msg }}</span>
    </div>
    <div class="budget-container">
      <form id="budget">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <label
              for="travelers"
            >Including yourself, how many travelers will you be covering expenses for?</label>
            <br />
          </div>
          <div class="col">
            <input type="number" name="travelers" value="2" />
            <br />
          </div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <label for="flight">What is the estimation for airfare?</label>
          </div>
          <div class="col">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text text-black large-text">$</span>
              </div>
              <input type="text" name="flight" class="form-control large-text" />
            </div>
          </div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <label for="stay">How many days will you be staying?</label>
          </div>
          <div class="col">
            <input type="number" name="stay" value="3" />
          </div>
          <div class="col"></div>
        </div>
        <div class="background-light-gray">
          <div class="row">
            <div class="col"></div>
            <div class="col">
              <label for="resort">Where will you be staying?</label>
            </div>
            <div class="col"></div>
          </div>
          <div class="row">
            <div class="col">
              <div @click="resortCost()">
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="mahekal">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="resort"
                      value="mahekal-garden-view"
                    />Mahekal - Garden View
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="mahekal">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="resort"
                      value="mahekal-ocean-view"
                    />Mahekal - Ocean View
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="hyatt">
                    <input class="form-check-input" type="radio" name="resort" value="hyatt-king" />Grand Hyatt - King
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="hyatt">
                    <input class="form-check-input" type="radio" name="resort" value="hyatt-queen" />Grand Hyatt-Queen
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="other">
                    <input class="form-check-input" type="radio" name="resort" value="other" />Other
                  </label>
                  <div class="other-self-input" style="display: none;">
                    <label for="otherSelfInput">Please specify: $</label>
                    <input type="text" name="otherSelfInput" />
                    <button
                      type="button"
                      id="updateOtherButton"
                      @click="isClicked = true; updateOtherCost();"
                      v-on:submit.prevent="onSubmit"
                    >Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col"></div>
          <div class="col">
            <label for="resortCost">Cost per night:</label>
          </div>
          <div class="col">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text text-black large-text">$</span>
              </div>
              <input type="text" name="resortCost" class="form-control large-text" />
            </div>
          </div>
          <div class="col"></div>
        </div>

        <div class="row">
          <div class="col"></div>
          <div class="col">
            <label for="totalCost">Total Cost:</label>
          </div>
          <div class="col">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text text-black large-text">$</span>
              </div>
              <input type="text" name="totalCost" class="form-control large-text" />
            </div>
          </div>
          <div class="col"></div>
        </div>
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
    };
  },
  props: {
    msg: String
  },
  methods: {
    updateOtherCost() {
      let form = document.forms["budget"];
      let other = form.elements["otherSelfInput"].value;
      console.log("other value " + other);
      return other;
    },
    resortCost() {
      let budgetTotal = 0;

      let form = document.forms["budget"];
      let resort = form.elements["resort"];
      let flight = form.elements["flight"].value;
      let travelers = form.elements["travelers"].value;

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

        let lengthOfStay = form.elements["stay"].value;
        console.log("stay >>> " + lengthOfStay);

        let totalCostInput = form.elements["totalCost"];

        if (lengthOfStay !== 0 && flight !== 0 && travelers !== 0) {
          roomTotalCost = costPerNight * lengthOfStay;
          flightTotalCost = flight * travelers;

          totalCost = (roomTotalCost + flightTotalCost).toFixed(2);
          console.log("Total Cost >>> " + totalCost);

          totalCostInput.value = totalCost;
        } else if (lengthOfStay !== 0 && flight !== 0) {
          totalCost = (costPerNight * lengthOfStay).toFixed(2);
          console.log("Total Cost >>> " + totalCost);
          totalCostInput.value = totalCost;
        }
        return totalCost;
      };

      let costInput = form.elements["resortCost"];
      let i = 0;
      for (i; i < resort.length; i++) {
        if (resort[i].checked) {
          if (resort[i].value === "other") {
            let otherSelfInput = document.querySelector(".other-self-input");
            otherSelfInput.style.display = "block";
          }
          if (this.isClicked) {
            console.log("checked (other button click) >>> " + resort[i]);
            let otherUpdateCost = this.updateOtherCost();
            budgetTotal = otherUpdateCost;
            this.isClicked = false;
          } else {
            console.log("checked >>> " + resort[i]);
            budgetTotal = resortCosts[resort[i].value].toFixed(2);
          }
          costInput.value = budgetTotal;
          console.log("value >>> " + budgetTotal);
          totalCost(budgetTotal, flight, travelers);
        }
      }
      return budgetTotal;
    }
  }
};
</script>

<style scoped>
* {
  color: black;
  font-weight: bold;
}

h1 {
  color: black;
}

ul {
  list-style-type: none;
}

.calculator {
  padding-top: 75px;
  background-image: url("../assets/alley2.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
}

.budget-container {
  padding: 50px;
}

#budget {
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(255, 255, 255, 0.95);
  border-radius: 4px;
}

#budget .row {
  padding: 10px;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  border: 2px solid (46, 45, 45);
  border-radius: 4px;
  color: black;
  text-align: center;
}

input[type="radio"]:checked {
  background-color: rgb(46, 45, 45);
}

.background-light-gray {
  background-color: rgb(92, 95, 92);
  margin-right: -2px;
  margin-left: -2px;
}

.background-light-gray label {
  color: white;
}

.text-black {
  color: black;
}

.large-text {
  font-size: 14px;
}

.intro {
  font-weight: bold;
  letter-spacing: 25px;
  opacity: 0.5;
  font-size: 45px;
}

.intro span {
  color: white;
}
</style>