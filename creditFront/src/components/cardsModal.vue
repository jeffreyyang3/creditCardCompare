<template>
  <div class="cardsModalContent">
    <div class="leftSide">
      <!-- <cardSelectComponent v-for="dd in unselectedCards" /> -->
    </div>
    <div class="rightSide">
      <!-- <h1 v-for="i in selectedCards"></h1> -->
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
  width: 50%;
  min-height: 100%;
}
.leftSide {
  background-color: blue;
}
.rightSide {
  background-color: green;
}
</style>
<script type="text/javascript">
import { mapState } from "vuex";
import cardSelectComponent from "@/components/cardSelectComponent";
export default {
  name: "cardsModal",
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
    selectedCards: function() {}
  },
  methods: {
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