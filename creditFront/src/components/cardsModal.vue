<template>
  <div class="cardsModalContent">
    <div class="leftSide"></div>
    <div class="rightSide"></div>
  </div>
</template>
<style scoped type="text/css">
.cardsModalContent {
  display: flex;
  width: 100%;
  height: 100%;
}
.leftSide,
.rightSide {
  width: 50%;
  height: 100%;
}
.leftSide {
  background-color: blue;
}
.rightSide {
  background-color: red;
}
</style>
<script type="text/javascript">
export default {
  name: "cardsModal",
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleVis: function() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    }
  }
};
</script>