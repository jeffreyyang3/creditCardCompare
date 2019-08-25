<template>
  <nav class="topNavbar">
    <div class="navItems">
      <router-link to="/modifyCards">Modify Cards</router-link>
      <router-link to="/">Home</router-link>

      <router-link to="/chooseCards">Split Screen Sadness</router-link>
      <router-link to="/about">Choose Cards: Fullscreen Edition</router-link>
      <div class="navDropDown">
        <div @click="quickAddClicked = !quickAddClicked" class="btn btn-primary">Quick Add</div>
        <div :class="{active: quickAddClicked}" class="navDropDownContent">
          <typeAhead />
        </div>
      </div>
    </div>
  </nav>
</template>	

<style type="text/css">
.navDropDownContent .typeAheadCard {
  display: none;
}

.navDropDownContent .suggestions {
  background-color: white;
}

.navDropDownContent {
  position: absolute;
  transform: translateX(-55%);
  display: none;
}

.navDropDownContent .searchBar,
.navDropDownContent .suggestions {
  box-shadow: none;
}
.navDropDownContent .noCards {
  margin-left: 0;
  border: 1px solid black;
}

.navDropDownContent .searchBar {
  border-radius: 3px 3px 0 0;
  margin-bottom: 0;
  border-bottom: none;
}
.navDropDownContent .suggestions {
  border-radius: 0 0 3px 3px;
}

.navDropDownContent.active {
  background-color: white;
  border-radius: 4px;
  display: block;
}

.navDropDownContent div {
  box-shadow: none;
}
.topNavbar {
  z-index: 123456789;
  width: 100%;
  position: fixed;
  top: 0;
  height: 46px;
  background-color: white;
  box-shadow: 0 2px 2px -2px grey;
}
.navItems {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
}
</style>

<script>
import typeAhead from "@/components/typeAhead";
export default {
  name: "topNavbar",
  components: { typeAhead },
  data: function() {
    return {
      quickAddClicked: false
    };
  },
  methods: {}
};
</script>
