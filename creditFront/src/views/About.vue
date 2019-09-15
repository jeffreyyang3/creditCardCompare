<template>
  <div class="about">
    <div class="aboutNavBar">
      <router-link to="/about/siteInfo">About</router-link>

      <router-link to="/about/faq">Important Info</router-link>

      <router-link to="/about/techInfo">comparecards4.me engineering blog</router-link>
    </div>
    <router-view />
  </div>
</template>
<style lang="scss">
.aboutNavBar {
  position: fixed;
  align-items: center;
  width: 100%;
  background-color: white;
  // box-shadow: 0 4px 2px -2px gray;
  box-shadow: 0 1px 1px rgba(182, 182, 182, 0.75);
  display: flex;
  justify-content: space-evenly;
  height: 40px;
  top: 46px;
}

.aboutSection {
  margin: 90px 10% 0 1%;
}

.aboutSection h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
<script>
export default {
  name: "About"
};
</script>
