<template>
  <div id="app">
    <topNavbar />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <transition name="slide-fade"> -->
    <!-- <div class="otherContent"> -->

    <div id="otherContent">
      <router-view />
    </div>
    <!-- </div> -->
    <!-- </transition> -->
  </div>
</template>

<style lang="scss">
// @import "@/assets/css/fonts.scss";
$font_path: "./assets/fonts/";
@font-face {
  font-family: "iconFont";
  src: url($font_path+"icomoon.woff") format("woff"),
    url($font_path+"icomoon.ttf") format("truetype");
}

// body::-webkit-scrollbar {
//   width: 0.7em;
//   background: white;
// }
// body::-webkit-scrollbar-thumb {
//   background: #c0392b;
//   height: 30px;
// }

// body::-webkit-scrollbar-track-piece {
//   display: none;
// }

#app {
  height: 100%;
}
#otherContent {
  margin-top: 46px;
  height: calc(100vh - 46px);
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/*#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
<script>
import topNavbar from "@/components/topNavbar";
const mobile = require("is-mobile")();
require("@/assets/css/bootstrap.css");
export default {
  name: "app",
  components: {
    topNavbar
  },
  mounted() {
    // this.$store.commit("initCards");
    if (mobile)
      alert(
        "I don't have the time management needed to make this look good on mobile,".concat(
          " so I'd strongly recommend just visiting on your computer. It's going to be reeeeeeeeeeal bad on mobile"
        )
      );

    if (this.$store.notInitialized) this.$store.commit("initCards");
  }
};
</script>
