<template>
  <div class="typeAhead">
    <input
      v-show="showSuggestions"
      placeholder="Search for a card!"
      class="searchBar"
      type="text"
      v-model="currentTyped"
    />
    <!-- <div v-for="filter in allFilters" :key="filter.displayName">{{ filter }}</div> -->
    <cardFilter
      v-for="filter in allFilters"
      :name="filter.displayName"
      :options="filter.options"
      :key="filter.displayName"
      v-on:optionChange="handleOptionChange(filter)($event)"
    />
    <div v-for="card in filteredCards" :key="card.cardKey"> {{ card.displayName }}</div>

    <div class="suggestions" v-if="showSuggestions && !forRemove">
      <div class="suggestionsItem" v-for="card in sortedSuggestions" :key="card.cardKey">
        <div class="cardTitle">{{ card.displayName }}</div>
        <div class="typeAheadCard">
          <cardSelectComponent :clickable="true" :name="card.cardKey"></cardSelectComponent>
        </div>
        <div class="addButton btn btn-primary" @click="$store.commit('addCard', card.cardKey)">+</div>
      </div>
    </div>
    <div class="suggestions" v-if="!forRemove && !showSuggestions">
      <div class="suggestionsItem">
        <div class="cardTitle">🎵 no cards left to add 🎵</div>
      </div>
    </div>

    <div class="suggestions" v-if="forRemove && selectedCards.length !== 0">
      <div class="suggestionsItem" v-for="card in selectedCards" :key="card.name">
        <div class="cardTitle">{{ card.displayName}}</div>
        <div class="typeAheadCard">
          <cardSelectComponent :clickable="true" :name="card.name"></cardSelectComponent>
        </div>
        <div class="addButton btn btn-danger" @click="$store.commit('unSelectCard', card.name)">−</div>
      </div>
    </div>
    <div class="suggestions" v-if="forRemove && selectedCards.length === 0">
      <div class="suggestionsItem">
        <div class="cardTitle">🎵 no cards left to remove 🎵</div>
      </div>
    </div>

    <!-- 
    <div v-for="card in suggestions" :key="card.displayName">
      <cardSelectComponent :name="card.cardKey" />
    </div>-->
    <!-- <div v-for="card in unSelectedCardsList" :key="card.cardKey">{{ card.displayName }}</div> -->
  </div>
</template>
<style scoped lang="scss">
$componentWidth: 95%;
$inputWidth: 50%;
$cardTitleWidth: 55%;
$hotBoxShadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
  0 2px 10px 0 rgba(34, 36, 38, 0.15);
$border: 1px solid #d4d4d5;
$borderRadius: 8px;
.noCards {
}
.typeAhead {
  margin: 2%;
}
.searchBar {
  height: 40px;
  width: 100%;
  border: $border;
  border-radius: $borderRadius;
  box-shadow: $hotBoxShadow;
  padding: 10px;
  font-size: 90%;
  margin-bottom: 7px;
}
.searchBar:focus {
  outline: none;
}
.addButton {
  margin-right: 5%;
  border-radius: 50%;
  font-weight: bold;
}
.suggestions {
  border: $border;
  border-radius: $borderRadius;
  box-shadow: $hotBoxShadow;
  width: 100%;
}

.typeAhead {
  width: $componentWidth;
}
.typeAheadCard {
}
.typeAheadCard .cardSelectComponent {
}
.cardTitle {
  font-weight: bold;
  font-size: 90%;
  margin-left: 5px;
  width: calc(#{$cardTitleWidth} - 5px);
}

.suggestionsItem {
  border-bottom: $border;
  margin: 2px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.suggestions .suggestionsItem:last-of-type {
  border-bottom: none;
}
</style>
<script type="text/javascript">
import { mapState } from "vuex";
import cardFilter from "@/components/Filter";
import cardSelectComponent from "@/components/cardSelectComponent";
import cardFilters from "@/data/cardFilters";
export default {
  name: "typeAhead",
  components: { cardSelectComponent, cardFilter },
  data: function() {
    return {
      currentTyped: "",
      activeFilters: [],
      filterState: {}
    };
  },
  props: {
    noImages: Boolean,
    forRemove: Boolean
  },

  computed: {
    ...mapState(["unSelectedCards", "selectedCards", "allCardsInfo"]),
    filteredCards: function() {
      let _ = [...this.sortedSuggestions];

      Object.keys(this.filterState).forEach(filterName => {
          console.log(this.filterState)
        _ = _.filter(sad => {
          return this.filterState[filterName](this.allCardsInfo[sad.cardKey]);
        });
      });
      return _;
    },

    allFilters: function() {
      const outLst = [];
      Object.keys(cardFilters).forEach(key => {
        if (key === "categoryAndIssuer") {
          const cai = cardFilters[key](this.allCardsInfo);
          outLst.push(cai.categories, cai.issuers);
        } else {
          outLst.push(cardFilters[key]);
        }
      });
      return outLst;
    },

    unSelectedCardsList: function() {
      var outLst = [];
      for (let cardKey in this.unSelectedCards) {
        outLst.push({
          displayName: this.unSelectedCards[cardKey].displayName,
          cardKey
        });
      }
      return outLst;
    },
    // filteredSuggestions: function() {
    //   console.log(cardFilters, "why");

    //   // const filterFn = cardFilters.network.filterFn;
    //   // return this.sortedSuggestions.filter(card => {
    //   //   return filterFn(
    //   //     this.$store.state.allCardsInfo[card.cardKey],
    //   //     "American Express"
    //   //   );
    //   // });
    // },

    showSuggestions: function() {
      return this.suggestions.length !== 0;
    },
    sortedSuggestions: function() {
      const copy = this.suggestions.slice();
      copy.sort((a, b) => {
        if (a.displayName < b.displayName) {
          return -1;
        }
        if (a.displayName > b.displayName) {
          return 1;
        }
        return 0;
      });
      return copy;
    },

    suggestions: function() {
      const substitutions = [{ old: "amex", new: "american express" }];

      let matchString = this.currentTyped.trim();
      substitutions.forEach(sub => {
        matchString = matchString.replace(sub.old, sub.new);
      });

      if (!matchString) return this.unSelectedCardsList;

      return this.unSelectedCardsList.filter(card => {
        return new RegExp(matchString, "i").test(card.displayName);
      });
    }
  },
  watch: {},
  methods: {
    // <cardFilter
    //   v-for="filter in allFilters"
    //   :name="filter.displayName"
    //   :options="filter.options"
    //   :key="filter.displayName"
    //   v-on:optionChange="handleOptionChange(filter)"
    // />
    handleOptionChange: function(filter) {
      return value => {
        this.$set(this.filterState, filter.displayName, card => {
          return filter.filterFn(card, value);
        });
      };
    }
  },

  mounted() {
    if (
      Object.keys(this.$store.state.unSelectedCards).length === 0 &&
      this.$store.state.selectedCards.length === 0
    )
      this.$store.commit("initCards");
  }
};
</script>
