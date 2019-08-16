<template>
  <div class="cardsModalContent">
    <div class="leftSide">
      <cardSelectComponent
        v-for="card in unSelectedCards"
        :key="card.name"
        :name="card.name"
        ref="leftSide"
      />
    </div>
    <div class="rightSide" v-on:dragover="dragOverHandler">
      <cardSelectComponent
        v-for="card in selectedCards"
        :key="card.name"
        :name="card.name"
        ref="rightSide"
      />
    </div>
  </div>
</template>
<style scoped type="text/css">
.cardsModalContent {
  display: flex;
  width: 100%;
  min-height: 100%;
}
.leftSide,
.rightSide {
  box-sizing: border-box;
  padding: 10px;
  width: 50%;
  min-height: 100%;
}
.leftSide {
  background-color: #f8f8f8;
}
.rightSide {
  background-color: white;
}
</style>
<script type="text/javascript">
import { mapState } from "vuex";
import cardSelectComponent from "@/components/cardSelectComponent";
export default {
  name: "cardsModal",
  components: {
    cardSelectComponent
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
    dragOverHandler: function() {
      console.log("dragged over");
    },
    toggleVis: function() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    }
  },
  mounted() {
    console.log("cardsmodal", this.unSelectedCards, this.selectedCards);
  }
};
</script>