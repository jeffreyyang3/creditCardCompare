<template>
  <div class="about">
    <!-- <transition name="fade"> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>
<style lang="scss">
.aboutSection {
  margin: 4% 10% 0 1%;
}

.aboutSection h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
<script>
export default {
  name: "About",
  mounted() {
    this.$store.state.currentView = "about";
    this.$router.push("/about/siteInfo");
  }
};
</script>
