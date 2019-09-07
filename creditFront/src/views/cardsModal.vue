<template>
  <div class="cardsModalContent">
    <div ref="leftSide" id="leftSide" v-on:dragover="dragOverHandler" v-on:drop="dropHandler">
      <typeAhead v-show="currentView === 'choose'" />

      <typeAhead v-show="currentView === 'remove'" forRemove />
      <modifyCards v-show="currentView === 'modify'" />
    </div>

    <!-- <cardSelectComponent v-for="card in unSelectedCards" :key="card.name" :name="card.name" /> -->
    <div ref="rightSide" id="rightSide" v-on:drop="dropHandler" v-on:dragover="dragOverHandler">
      <CBLine v-show="showGraph" />
      <div v-show="!showGraph" class="noGraph">
        <h1>Add a card from the left!</h1>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
/* addAllRemaining */
/* store dispatch unSelectAll */
$leftSideWidth: 38%;

.typeAhead {
  margin-top: 0;
}
.noGraph {
  height: 100%;
  align-self: center;
  display: flex;
  align-items: center;
}
.noGraph * {
  text-align: center;
}
.cardsModalRightCards {
  display: flex;
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
#leftSide {
  width: $leftSideWidth;
  box-sizing: border-box;
  padding: 30px;
}
#rightSide {
  display: flex;
  justify-content: center;
  width: calc(100% - #{$leftSideWidth});
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
      unselectedCards: []
    };
  },
  computed: {
    ...mapState(["unSelectedCards", "selectedCards", "currentView"]),
    showGraph: function() {
      return this.selectedCards.length !== 0;
    },
    showSelect: function() {
      return (
        Object.keys(this.unSelectedCards).length !== 0
        // this.currentView === "choose"
      );
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
