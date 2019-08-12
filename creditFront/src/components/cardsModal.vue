<template>
  <div class="cardsModalContent">
    <h1>;alksj;afkl</h1>
    <h1>;alksj;afkl</h1>
    <h1>;alksj;afkl</h1>
    <h1>;alksj;afkl</h1>
    <h1>;alksj;afkl</h1>
  </div>
</template>
<style type="text/css">
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