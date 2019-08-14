<template>
  <div class="CBLineContainer">
    <div class="highChartContainer" ref="highChartContainer"></div>
    <div class="allMod">
      <div class="categoryMod" v-for="(amount, cat) in categorySpend" v-bind:key="cat">
        <span class="categoryTitle">{{ cat.charAt(0).toUpperCase() + cat.slice(1) }}:</span>

        <!-- <input type="number" step=".01" min="0" :max="max" v-model.number="modCategorySpend[cat]" /> -->
        <div class="inputContainer">
          <input
            type="number"
            step=".01"
            v-model.number="categorySpend[cat]"
            @change="createHighChart(selectedCards)"
          />
        </div>
        <!-- <h2>${{ modCategorySpend[cat].toFixed(0) }}</h2> -->
        <!-- <h2>{{ displayMoney(modCategorySpend[cat]) }}</h2> -->
        <!-- {{ modCategorySpend[cat] | displayMoneyFilter}} -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.categoryMod {
  display: flex;
  /* width: 80%; */
  flex-direction: row;
  align-items: baseline;
  /* -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 3px #ccc; */
  margin: 10px;
  font-size: 19px;
  width: 200px;
  font-weight: 700;
}
.categoryTitle {
  white-space: nowrap;
}
.categoryMod input {
  font-family: inherit;
  font-size: 19px;
  font-weight: 700;
  width: 85px;
  color: inherit;
  cursor: pointer;
  border: none;
}
.categoryMod input:focus {
  outline: none;
}
.categoryMod .inputContainer:before {
  content: "$";
}
.inputContainer {
  margin-left: 4px;
  display: flex;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  padding: 2px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none;
  <-Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
  /* border: 1px solid #2c3e50; */
  /* border-radius: 2px; */
  /* margin: 1px; */
}

.highChartContainer {
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 3px #ccc;
  margin: auto;
  width: 100%;
}
.highcharts-yaxis-grid > path:last-of-type {
  display: none;
}
.CBLineContainer {
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.allMod {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}
</style>

<script>
import { mapState } from "vuex";
import Highcharts from "highcharts";
import cardsDb from "@/data/cards";

export default {
  name: "CBLine",

  data: function() {
    return {
      placeholder: "asdf",
      chart: null,
      categorySpend: this.$store.state.categorySpend,
      max: 4000,
      cards: []
    };
  },

  methods: {
    test: function() {
      console.log("asdf");
    },
    displayMoney: function(item) {
      if (item !== "") {
        return "$" + item.toFixed(2);
      }
    },

    CStoMonthCB: function(card) {
      let totalCB = 0;
      let totalSpend = 0;

      for (let category in this.categorySpend) {
        let subTotal = 0;
        if (card.categories[category]) {
          subTotal =
            card.categories[category].percent * this.categorySpend[category];
        } else if (card.categories.all) {
          subTotal = card.categories.all.percent * this.categorySpend[category];
        }

        totalCB += subTotal;
        totalSpend += this.categorySpend[category];
      }
      return {
        totalCB,
        totalSpend
      };
    },

    createHighChart: function(cards) {
      Highcharts.chart(this.containerDiv, {
        title: {
          text: "Cash Back Comparison"
        },

        yAxis: {
          title: {
            text: "$ Cash Back"
          },
          gridLineWidth: 1
        },
        xAxis: {
          title: {
            text: "Months"
          },
          gridLineWidth: 1
        },
        legend: {
          align: "left",
          verticalAlign: "bottom"
        },

        series: cards.map(this.cardToSeriesData),
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }
          ]
        }
      });
    },

    cardToSeriesData: function(card) {
      const seriesData = [];
      const monthCB = this.CStoMonthCB(card).totalCB;
      const monthTotalSpend = this.CStoMonthCB(card).totalSpend;
      let bonuses;
      if (card.bonus.type === "standard") {
        console.log(card.bonus.bonuses);
        bonuses = JSON.parse(JSON.stringify(card.bonus.bonuses));
        console.log("orig", bonuses);
      }

      let totalCB = 0;
      let totalSpend = 0;
      for (let month = 1; month <= 25; month++) {
        let cbMultiplier = 1;
        console.log("total spend", totalSpend[0]);

        if (card.bonus.type === "standard" && bonuses.length !== 0) {
          if (totalSpend >= bonuses[0].msr) {
            totalCB += bonuses[0].rewardAmount;
            bonuses.shift();
          }
        } else if (
          card.bonus.type === "percentTime" &&
          month <= card.bonus.length
        ) {
          cbMultiplier = card.bonus.multiplier;
        }
        totalCB += monthCB * cbMultiplier;
        totalSpend += monthTotalSpend;
        if (card.annualFee.has && month % 12 === 0) {
          if (!(card.annualFee.waiveFirst && month === 12)) {
            totalCB -= card.annualFee.amount;
          }
        }
        seriesData.push({
          x: month,
          y: totalCB
        });
      }
      return {
        name: card.displayName,
        data: seriesData,
        marker: {
          enabled: false
        }
      };
    }
  },
  computed: {
    ...mapState(["selectedCards"])
  },
  watch: {
    selectedCards: function() {
      this.createHighChart(this.selectedCards);
    }
  },

  mounted() {
    // let cardss = cardsDb();
    // for (let key in cardss) {
    //   this.$store.commit("addCard", cardss[key]);
    // }
    console.log("mount");
    if (this.$store.state.selectedCards.length == 0) {
      this.$store.commit("addCard");
    }

    this.containerDiv = this.$refs.highChartContainer;
    // console.log(this.$store.state.selectedCards)
    this.createHighChart(this.$store.state.selectedCards);
  }
};
</script>
