<template>
  <div class="cardsModalContent">
    <div ref="leftSide" id="leftSide" v-on:drop="dropHandler" v-on:dragover="dragOverHandler">
      <CBLine v-show="showGraph" />
      <div v-show="!showGraph" class="noGraph">
        <h1>Add a card from the right!</h1>
      </div>
    </div>
    <div ref="rightSide" id="rightSide" v-on:dragover="dragOverHandler" v-on:drop="dropHandler">
      <div class="searchToggleButtons">
        <button
          type="button"
          v-show="showSelect"
          class="btn btn-primary"
          @click="currentView = 'choose'"
        >Select Cards</button>

        <button
          v-show="showGraph"
          type="button"
          class="btn btn-danger"
          @click="currentView = 'remove'"
        >Remove Cards</button>

        <button
          v-show="showAddAll"
          type="button"
          class="btn btn-success"
          @click="$store.commit('addAllRemaining')"
        >Add All</button>
        <button
          v-show="showRemoveAll"
          type="button"
          class="btn btn-danger"
          @click="$store.dispatch('unSelectAll')"
        >Remove All</button>
        <button
          type="button"
          class="btn btn-secondary"
          @click="currentView = 'modify'"
        >Modify Selected</button>
      </div>
      <typeAhead v-show="currentView === 'choose'" />

      <typeAhead v-show="currentView === 'remove'" forRemove />
      <modifyCards v-show="currentView === 'modify'" />
      <!-- <cardSelectComponent v-for="card in unSelectedCards" :key="card.name" :name="card.name" /> -->
    </div>
  </div>
</template>
<style scoped type="text/css">
/* addAllRemaining */
/* store dispatch unSelectAll */
.noGraph {
  height: 100%;
  align-self: center;
}
.noGraph * {
  text-align: center;
}
.cardsModalRightCards {
  display: flex;
}
.searchToggleButtons {
  display: flex;
  justify-content: space-evenly;
}

.cardsModalContent {
  display: flex;
  width: 100%;
  min-height: 100%;
}
#leftSide,
#rightSide {
  box-sizing: border-box;
  padding: 10px;
  /* width: 50%; */
  min-height: 100%;
  max-height: calc(100vh - 46px);
  overflow-y: scroll;
}
#rightSide {
  width: 42%;
}
#leftSide {
  display: flex;
  justify-content: center;
  width: 58%;
}
</style>
<script type="text/javascript">
import { mapState } from "vuex";
import typeAhead from "@/components/typeAhead";
import CBLine from "@/views/CBLine";
import modifyCards from "@/views/modifyCards";

export default {
  name: "cardsModal",
  components: {
    typeAhead,
    CBLine,
    modifyCards
  },
  // components: cardSelectComponent,
  data: function() {
    return {
      isActive: false,
      unselectedCards: [],
      currentView: "choose"
    };
  },
  computed: {
    ...mapState(["unSelectedCards", "selectedCards"]),
    showGraph: function() {
      return this.selectedCards.length !== 0;
    },
    showSelect: function() {
      return (
        Object.keys(this.unSelectedCards).length !== 0
        // this.currentView === "choose"
      );
    },
    showAddAll: function() {
      return this.showSelect && this.currentView === "choose";
    },
    showRemoveAll: function() {
      return this.currentView === "remove" && this.selectedCards.length !== 0;
    }
  },
  watch: {
    selectedCards: function() {}
  },
  methods: {
    dragOverHandler: function(event) {
      event.preventDefault();
      // console.log("dragged over");
    },
    dropHandler: function(event) {
      const leftSide = this.$refs.leftSide;

      if (event.target === leftSide || leftSide.contains(event.target)) {
        this.$store.dispatch("handleDropOnLeft");
        return;
      }

      this.$store.dispatch("handleDropOnRight");
    },
    toggleVis: function() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    }
  },
  mounted() {}
};
</script>
