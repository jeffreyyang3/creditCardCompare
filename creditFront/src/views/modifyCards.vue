<template>
  <div class="modifyCards">
    <div class="modifyCardsLeft">
      <h3 v-if="selectedCards.length === 0">add cards to modify them!</h3>
      <div class="selectedCards" :key="card.name" v-for="card in selectedCards">
        <div class="cardAllMod">
          <cardSelectComponent :clickable="false" :name="card.name" />
          <div class="modInputs">
            <div
              :class="mod.toChange"
              class="categoryMod"
              v-for="mod in modifications"
              :key="mod.name"
            >
              <span class="categoryTitle">{{ mod.name }}</span>

              <!-- <input type="number" step=".01" min="0" :max="max" v-model.number="modCategorySpend[cat]" /> -->
              <div class="inputContainer">
                <input
                  type="number"
                  step=".1"
                  v-model.number="card.rewards[mod.toChange]"
                  @change="handleModChange(mod.toChange, card.rewards[mod.toChange],
                   card)"
                />
              </div>
              <!-- <h2>${{ modCategorySpend[cat].toFixed(0) }}</h2> -->
              <!-- <h2>{{ displayMoney(modCategorySpend[cat]) }}</h2> -->
              <!-- {{ modCategorySpend[cat] | displayMoneyFilter}} -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modifyCardsRight"></div>
  </div>
</template>

<style scoped lang="scss">
$leftWidth: 35%;

.modInputs {
  flex-grow: 1;
}
.inputContainer {
  margin-left: auto;
}
.categoryMod {
  width: 100%;
}

.categoryMod.pointValue .inputContainer::before {
  content: "¢";
}

.modifyCards {
  padding: 8px;
  display: flex;
}
.cardAllMod {
  display: flex;
  align-items: center;
}

.modifyCardsLeft {
  height: 100%;
  width: $leftWidth;
}

.modifyCardsRight {
  height: 100%;
  width: calc(100% - #{$leftWidth});
  background-color: red;
}
</style>

<script>
import cardSelectComponent from "@/components/cardSelectComponent";
import { mapState } from "vuex";
export default {
  name: "modifyCards",
  components: { cardSelectComponent },
  computed: {
    ...mapState(["selectedCards"])
  },
  methods: {
    handleModChange: function(modName, amount, card) {
      console.log(modName, amount, card);
      const payload = { mod: {} };
      payload.card = card;
      payload.mod.modName = modName;
      payload.mod.amount = amount;

      this.$store.commit("setMod", payload);
    }
  },

  data: function() {
    return {
      modifications: [
        { name: "Cents Per Point", toChange: "pointValue" },
        { name: "Flat Bonus", toChange: "flatBonus" },
        {
          name: "Effective Annual Fee",
          toChange: "effectiveAF"
        }
      ]
    };
  }
};
</script>
