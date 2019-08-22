<template>
  <div class="typeAhead">
    <input placeholder="Search for a card!" class="searchBar" type="text" v-model="currentTyped" />
    <div class="suggestions" v-show="showSuggestions">
      <div class="suggestionsItem" v-for="card in suggestions" :key="card.cardKey">
        <div class="cardTitle">{{ card.displayName }}</div>
        <div class="typeAheadCard">
          <cardSelectComponent :name="card.cardKey"></cardSelectComponent>
        </div>
        <div class="addButton btn btn-primary" @click="$store.commit('addCard', card.cardKey)">+</div>
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
$hotBoxShadow: 2px 10px 0 rgba(34, 36, 38, 0.15);
$hotBoxShadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
  0 2px 10px 0 rgba(34, 36, 38, 0.15);
$border: 1px solid #d4d4d5;
.searchBar {
  margin: 10px;
  height: 40px;
  width: 100%;
  border: $border;
  border-radius: 20px;
  box-shadow: $hotBoxShadow;
  padding: 10px;
  font-size: 90%;
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
  border-radius: 20px;
  box-shadow: $hotBoxShadow;
  margin: 10px;
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
import cardSelectComponent from "@/components/cardSelectComponent";
export default {
  name: "typeAhead",
  components: { cardSelectComponent },
  data: function() {
    return {
      currentTyped: ""
    };
  },
  computed: {
    ...mapState(["unSelectedCards", "selectedCards"]),
    unSelectedCardsList: function() {
      console.log("asdf");
      var outLst = [];
      for (let cardKey in this.unSelectedCards) {
        outLst.push({
          displayName: this.unSelectedCards[cardKey].displayName,
          cardKey
        });
      }
      return outLst;
    },
    showSuggestions: function() {
      console.log(this.suggestions);
      return this.suggestions.length !== 0;
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
  methods: {},
  mounted() {}
};
</script>
