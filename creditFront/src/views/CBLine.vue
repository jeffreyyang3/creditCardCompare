<template>
  <div class="CBLineContainer" :class="{'graphOnly': graphOnly}">
    <div v-show="showGraph" class="highChartContainer" ref="highChartContainer"></div>
    <div v-show="!showGraph" class="noGraphText" v-if="!graphOnly">
      <h1 class="noSelect">No Cards Selected</h1>
      <typeAhead v-if="!showGraph" />
    </div>
    <div class="modsAndHeadings" v-if="!graphOnly">
      <h4 class="boxTitle">Your monthly spending on..</h4>
      <div class="allMod">
        <div class="categoryMod" v-for="(amount, cat) in categorySpend" v-bind:key="cat">
          <span class="categoryTitle" :class="getClass(cat)">{{ cat }}</span>

          <!-- <input type="number" step=".01" min="0" :max="max" v-model.number="modCategorySpend[cat]" /> -->
          <div class="inputContainer">
            <input
              type="number"
              step="100"
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

    <div class="cashBackTableContainer" v-if="!graphOnly">
      <h4 class="boxTitle">
        $ in rewards after
        <input
          class="monthInput"
          size="2"
          type="number"
          step="1"
          v-model.number="months"
          @change="createHighChart(selectedCards)"
        />
        <span v-show="months === 1">month</span>
        <span v-show="months !== 1">months</span>
      </h4>
      <table class="cashBackTable">
        <tr v-for="card in sortedCards" :key="card.cardName">
          <td>{{ allCardsInfo[card.cardName].displayName }}</td>
          <td>${{ card.amount.toFixed(2)}}</td>
        </tr>
      </table>
    </div>
    <div v-else class="graphSideCards" ref="graphSideCards">
      <div class="idk" v-for="card in sortedCards" :key="card.cardName">
        <cardSelectComponent
          :clickable="false"
          :name="card.cardName"
          @hover="handleGraphCardHover(card.cardName)"
        />

        <div class="cbAmount">${{ card.amount.toFixed(2) }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// <div class="graphSideCards" ref="graphSideCards">
//       <div v-for="card in sortedCards" :key="card.cardName">
//         <!-- <cardSelectComponent
//           :clickable="false"
//           :name="card.cardName"
//           @hover="handleGraphCardHover(card.cardName)"
//         />-->
//         <div class="cardName">{{ allCardsInfo[card.cardName].displayName }}</div>

//         <div class="cbAmount">${{ card.amount.toFixed(2) }}</div>
//       </div>
//     </div>
$hotBoxShadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
  0 2px 10px 0 rgba(34, 36, 38, 0.15);

$hcHeight: 50%;
$boxInnerMargin: 12px;
$baseHeight: 100% - $hcHeight;
$boxMargin: 10px;
$boxHeight: calc(#{$baseHeight} - #{2 * $boxMargin});

.idk {
  display: flex;
  align-items: center;
  justify-content: center;
}

.categoryTitle::after {
  font-family: "iconFont";
  margin-left: 4px;
  font-size: 90%;
}

.categoryTitle.dining::after {
  content: "";
}

.categoryTitle.travel::after {
  content: "";
}

.categoryTitle.groceries::after {
  content: "";
}

.categoryTitle.gas::after {
  content: "";
}

.boxTitle {
  color: #4d748a;
}

.modsAndHeadings,
.cashBackTableContainer {
  height: $boxHeight;
  box-sizing: border-box;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 15px;
  overflow-y: scroll;
  align-self: flex-end;
}

.modsAndHeadings > *,
.cashBackTableContainer > * {
  width: 100%;
}

.modsAndHeadings {
  display: flex;
  flex-direction: column;
  width: 35%;
}
.cashBackTableContainer {
  flex-grow: 1;
  margin-left: 25px;
}

.noSelect {
  text-align: center;
}

.monthInput {
  box-shadow: $hotBoxShadow;
  width: 1.5em;
  text-align: center;
  border: 1px solid #d3d3d3;
  color: #4d748a;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
}

.cbAmount {
  text-align: center;
  font-weight: bold;
}

.graphSideCards {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 20%;
  padding-bottom: 10px;
}
.categoryMod {
  display: flex;
  /* width: 80%; */
  flex-direction: column;
  width: 50%;
  // width: max-content;

  /* -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 3px #ccc; */
  font-size: 19px;
}
.categoryTitle {
  // font-size: 115%;
  white-space: nowrap;
  // text-align: center;
  margin-left: 5px;
  margin-bottom: 5px;
  text-transform: capitalize;
}
.categoryMod input {
  font-family: inherit;
  font-size: 19px;
  width: 100%;
  color: inherit;
  cursor: pointer;
  border: none;
}
.categoryMod input:focus,
.monthInput:focus {
  outline: none;
}
.categoryMod .inputContainer:before {
  content: "$";
  font-weight: normal;
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
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #e0e0e0;
  width: 100%;
  height: $hcHeight;
  align-self: flex-start;
}

.graphOnly .highChartContainer {
  height: 100%;
  width: 80%;
}
.highcharts-grid > path:last-of-type {
  display: none;
}
.CBLineContainer {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
}

.allMod {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-grow: 1;
  // justify-content: space-evenly;
}

// .highcharts-axis-labels > text:last-of-type {
//   display: none;
// }
</style>

<script>
import { mapState } from "vuex";
import Highcharts from "highcharts";
import cardsDb from "@/data/cards";
import typeAhead from "@/components/typeAhead";
import cardSelectComponent from "@/components/cardSelectComponent";
import utils from "@/utils";
export default {
  name: "CBLine",
  components: {
    typeAhead,
    cardSelectComponent
  },

  data: function() {
    return {
      placeholder: "asdf",
      chart: null,
      categorySpend: this.$store.state.categorySpend,
      max: 4000,
      cards: [],
      months: 12,
      currentChart: false
    };
  },

  props: {
    graphOnly: Boolean
  },

  computed: {
    ...mapState([
      "unSelectedCards",
      "selectedCards",
      "cardTotalCB",
      "cardModifications",
      "allCardsInfo"
      // "categorySpend"
    ]),
    showGraph: function() {
      return this.selectedCards.length !== 0;
    },
    sortedCards: function() {
      const lst = [];
      Object.keys(this.cardTotalCB).forEach(key => {
        lst.push({
          cardName: key,
          amount: this.cardTotalCB[key]
        });
      });

      return lst.sort((a, b) => {
        return b.amount - a.amount;
      });
    }
  },

  methods: {
    getClass: function(cat) {
      return cat;
    },
    displayMoney: function(item) {
      if (item !== "") {
        return "$" + item.toFixed(2);
      }
    },
    handleGraphCardHover: function() {},

    CStoMonthCB: function(card) {
      let totalCB = 0;
      let totalSpend = 0;

      for (let category in this.categorySpend) {
        let subTotal = 0;
        if (card.categories[category]) {
          subTotal =
            card.categories[category].percent * this.categorySpend[category];
        } else if (card.categories.other) {
          subTotal =
            card.categories.other.percent * this.categorySpend[category];
        }

        totalCB += subTotal;
        totalSpend += this.categorySpend[category];
      }
      totalCB *= card.rewards.pointValue;
      return {
        totalCB,
        totalSpend
      };
    },

    createHighChart: function(cards) {
      if (this.currentChart) {
        this.currentChart.destroy();
      }
      this.currentChart = Highcharts.chart(this.$refs.highChartContainer, {
        // chart: {
        //   events: {
        //     render: function() {
        //       setTimeout(this.reflow.bind(this), 100);
        //     }
        //   }
        // },
        plotOptions: {
          series: {
            animation: {
              duration: 600
            }
          }
        },
        title: {
          text: "Rewards Comparison"
        },

        yAxis: {
          title: {
            text: "$ in Rewards"
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
          verticalAlign: "bottom",
          maxHeight: this.graphOnly ? undefined : 70
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
        bonuses = JSON.parse(JSON.stringify(card.bonus.bonuses));
      }

      let totalCB = 0;
      let totalSpend = 0;
      let asdf = this.months;
      const capData = {};
      Object.keys(card.categories).forEach(category => {
        if (card.categories[category].cap) {
          capData[category] = {
            hit: false,
            capAmount: card.categories[category].cap,
            capTime: card.categories[category].capTime,
            currentSpend: 0
          };
        }
      });

      for (let month = 1; month <= this.months; month++) {
        if (month === 1) {
          totalCB += card.rewards.flatBonus;
        }
        let cbMultiplier = 1;

        if (card.bonus.type === "percentTime" && month <= card.bonus.length) {
          cbMultiplier = card.bonus.multiplier;
        }
        totalCB += monthCB * cbMultiplier;
        totalSpend += monthTotalSpend;
        // if cap hit: totalCB += (card.categories.other.percent * this.categorySpend(category) - card.categories[category].percent * this.categorySpend(category))
        Object.keys(card.categories).forEach(category => {
          const cap = capData[category];
          if (cap) {
            const isSpecial = category === "Special Category";
            const categorySpend = isSpecial
              ? card.rewards.specialCatSpend
              : this.categorySpend[category];

            console.log(categorySpend);
            console.log(cap);
            if (month % cap.capTime === 0) {
              cap.currentSpend = 0;
              cap.hit = false;
            }
            console.log("old", totalCB);

            if (cap.hit) {
              console.log("one");
              if (isSpecial)
                totalCB +=
                  cbMultiplier * card.categories.other.percent * categorySpend;
              else {
                totalCB +=
                  card.categories.other.percent * categorySpend -
                  card.categories[category].percent * categorySpend;
              }
            } else if (cap.currentSpend + categorySpend > cap.capAmount) {
              console.log("two");
              cap.hit = true;
              const spendLeft = cap.capAmount - cap.currentSpend;
              if (isSpecial) {
                totalCB +=
                  card.categories[category].percent * spendLeft * cbMultiplier;
                totalCB +=
                  cbMultiplier *
                  card.categories.other.percent *
                  (categorySpend - spendLeft);
                return;
              }
              totalCB += card.categories[category].percent * spendLeft;
              totalCB +=
                card.categories.other.percent * (categorySpend - spendLeft);
            } else {
              console.log("three");
              cap.currentSpend += categorySpend;
              if (isSpecial)
                totalCB +=
                  card.categories[category].percent *
                  categorySpend *
                  cbMultiplier;
            }
            console.log("new", totalCB);
          }
        });

        //  capData[category] = {
        //             hit: false,
        //             capAmount: card.categories[category].capAmount,
        //             capTime: card.categories[category].capTime,
        //             currentSpend: 0
        //           };

        if (card.bonus.type === "standard" && bonuses.length !== 0) {
          if (totalSpend >= bonuses[0].msr && month <= bonuses[0].expire) {
            totalCB += bonuses[0].rewardAmount * card.rewards.pointValue;
            bonuses.shift();
          }
        }
        if (month % 12 === 0) {
          if (!(card.annualFee.waiveFirst && month === 12)) {
            totalCB -= card.rewards.effectiveAF;
          }
        }
        seriesData.push({
          x: month,
          y: totalCB
        });
      }

      // setCardCB(state, cardName, amount, months) {

      this.$store.commit("setCardCB", {
        name: card.name,
        amount: totalCB
      });

      return {
        name: card.displayName,
        data: seriesData,
        marker: {
          enabled: seriesData.length === 1 ? true : false
        }
      };
    }
  },

  watch: {
    selectedCards: function() {
      if (this.graphOnly) {
        if (this.selectedCards.length === 0) {
          this.$router
            .push({
              path: "/"
            })
            .catch(err => {});
          this.$store.commit("setView", "choose");
        }
      }
      this.createHighChart(this.selectedCards);
      // console.log(utils.isSideOverflowing(this.$refs.graphSideCards));
      // this.currentChart.reflow();
    },

    cardModifications: function() {
      this.createHighChart(this.selectedCards);
    },

    cardTotalCB: function() {
      this.$store.state.selectedCards.sort((a, b) => {
        return this.cardTotalCB[b.name] - this.cardTotalCB[a.name];
      });
      this.$store.state.selectedCards.push();
    }
  },

  mounted() {
    if (this.graphOnly) {
      this.$store.commit("setView", "fullScreenGraph");
    }
    Highcharts.setOptions({
      chart: {
        style: {
          fontFamily: "Roboto, sans-serif"
        }
      }
    });

    // console.log(this.$store.state.selectedCards)
    this.createHighChart(this.$store.state.selectedCards);
  }
};
</script>
