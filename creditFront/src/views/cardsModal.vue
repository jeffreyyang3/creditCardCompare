<template>
  <div class="cardsModalContent">
    <div ref="leftSide" id="leftSide" v-on:dragover="dragOverHandler" v-on:drop="dropHandler">
      <typeAhead />
      <!-- <cardSelectComponent v-for="card in unSelectedCards" :key="card.name" :name="card.name" /> -->
    </div>
    <div ref="rightSide" id="rightSide" v-on:drop="dropHandler" v-on:dragover="dragOverHandler">
      <CBLine v-if="showGraph"></CBLine>
    </div>
  </div>
</template>
<style scoped type="text/css">
.cardsModalRightCards {
  display: flex;
}

.cardsModalContent {
  display: flex;
  width: 100%;
  min-height: 100%;
}
.graphSideCards #leftSide,
#rightSide {
  box-sizing: border-box;
  padding: 10px;
  /* width: 50%; */
  min-height: 100%;
}
#leftSide {
  width: 42%;
  background-color: #f8f8f8;
}
#rightSide {
  width: 58%;
  background-color: white;
}
</style>
<script type="text/javascript">
import { mapState } from "vuex";
import typeAhead from "@/components/typeAhead";
import CBLine from "@/views/CBLine";

export default {
  name: "cardsModal",
  components: {
    typeAhead,
    CBLine
  },
  // components: cardSelectComponent,
  data: function() {
    return {
      isActive: false,
      unselectedCards: []
    };
  },
  computed: {
    ...mapState(["unSelectedCards", "selectedCards"]),
    showGraph: function() {
      return this.selectedCards.length !== 0;
    }
  },
  watch: {
    selectedCards: function() {
      console.log("selected cards", this.selectedCards);
      console.log("unselected", this.unSelectedCards);
    }
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
