<template>
  <div class="cardsModalContent">
    <div ref="leftSide" id="leftSide" v-on:dragover="dragOverHandler" v-on:drop="dropHandler">
      <typeAhead />
      <!-- <cardSelectComponent v-for="card in unSelectedCards" :key="card.name" :name="card.name" /> -->
    </div>
    <div ref="rightSide" id="rightSide" v-on:drop="dropHandler" v-on:dragover="dragOverHandler">
      <h3>selected cards drag to right to add</h3>
      <cardSelectComponent v-for="card in selectedCards" :key="card.name" :name="card.name" />
    </div>
  </div>
</template>
<style scoped type="text/css">
.cardsModalContent {
  display: flex;
  width: 100%;
  min-height: 100%;
}
#leftSide,
#rightSide {
  box-sizing: border-box;
  padding: 10px;
  width: 50%;
  min-height: 100%;
}
#leftSide {
  background-color: #f8f8f8;
}
#rightSide {
  background-color: white;
}
</style>
<script type="text/javascript">
import { mapState } from "vuex";
import cardSelectComponent from "@/components/cardSelectComponent";
import typeAhead from "@/components/typeAhead";
export default {
  name: "cardsModal",
  components: {
    cardSelectComponent,
    typeAhead
  },
  // components: cardSelectComponent,
  data: function() {
    return {
      isActive: false,
      unselectedCards: []
    };
  },
  computed: {
    ...mapState(["unSelectedCards", "selectedCards"])
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