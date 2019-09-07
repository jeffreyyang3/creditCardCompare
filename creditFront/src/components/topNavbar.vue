<template>
  <nav class="topNavbar">
    <div class="navItems">
      <!-- <router-link to="/modifyCards">Modify Cards</router-link> -->
      <div class="navItem" @click="$store.commit('setView', 'choose')">Select Cards</div>

      <div class="navItem" @click="$store.commit('setView', 'remove')">Remove Cards</div>

      <div class="navItem" @click="$store.commit('addAllRemaining')" v-show="showSelect">Add All</div>
      <div class="navItem" @click="$store.dispatch('unSelectAll')" v-show="showRemoveAll">Remove All</div>
      <div class="navItem" @click="$store.commit('setView', 'modify')">Modify Selected</div>
      <!-- <router-link to="/">Home</router-link> -->

      <!-- <router-link to="/chooseCards">Split Screen Sadness</router-link> -->
      <!-- <router-link to="/about">Choose Cards: Fullscreen Edition</router-link> -->

      <!-- <router-link to="/viewGraph">View Graph: Fullscreen Edition</router-link> -->
      <div v-show="currentView === 'modify'" class="navDropDown">
        <div @click="quickAddClicked = !quickAddClicked" class="navItem">Quick Add</div>
        <div :class="{active: quickAddClicked}" class="navDropDownContent">
          <typeAhead />
        </div>
      </div>
    </div>
  </nav>
</template>	

<style type="text/css">
.navDropDownContent .vueSelectWrapper {
  display: none;
}
.navDropDownContent .typeAheadCard {
  display: none;
}

.navDropDownContent .suggestions {
  background-color: white;
}

.navDropDownContent .addButton {
  background-color: transparent;
  color: black;
  border: none;
}
.navDropDownContent {
  position: absolute;
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
  background-color: #4d748a;
  box-shadow: 0 2px 2px -2px grey;
}
.navItems {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.navItem {
  color: white;
  cursor: pointer;
}
</style>

<script>
import typeAhead from "@/components/typeAhead";
import { mapState } from "vuex";
export default {
  name: "topNavbar",
  components: { typeAhead },
  data: function() {
    return {
      quickAddClicked: false
    };
  },
  computed: {
    ...mapState(["currentView", "selectedCards", "unSelectedCards"]),
    showRemoveAll: function() {
      return this.selectedCards.length !== 0;
    },
    showSelect: function() {
      return (
        Object.keys(this.unSelectedCards).length !== 0
        // this.currentView === "choose"
      );
    }
  },
  methods: {}
};
</script>
