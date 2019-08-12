<template>
  <div v-bind:class="{active: isActive}" class="cardsModalContent">
    <h1>;alksj;afkl</h1>
    <h1>;alksj;afkl</h1>
    <h1>;alksj;afkl</h1>
    <h1>;alksj;afkl</h1>
    <h1>;alksj;afkl</h1>
  </div>
</template>
<style type="text/css">
.cardsModalContent {
  position: absolute;
  left: 50%;
  top: 50%;
  /* transform: translate(-50%, -50%); */
  display: none;
  background-color: red;
}
.cardsModalContent.active {
  display: flex;
  flex-direction: column;
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