<template>
  <div class="typeAhead">
    <input type="text" v-model="currentTyped" />

    <div v-for="card in suggestions" :key="card.displayName">{{ card.displayName }}</div>
    <!-- <div v-for="card in unSelectedCardsList" :key="card.cardKey">{{ card.displayName }}</div> -->
  </div>
</template>
<style scoped lang="scss">
</style>
<script type="text/javascript">
import { mapState } from "vuex";
export default {
  name: "typeAhead",
  components: {},
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

    suggestions: function() {
      const matchString = this.currentTyped.trim();
      if (!matchString) return [];

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