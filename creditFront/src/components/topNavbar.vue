<template>
  <nav class="topNavbar">
    <div class="navItems" v-show="currentView !== 'about'">
      <!-- <router-link to="/modifyCards">Modify Cards</router-link> -->
      <div
        class="navItem"
        v-show="showSelect"
        @click="$store.commit('setView', 'choose')"
      >Select Cards</div>

      <div
        class="navItem"
        v-show="showRemove"
        @click="$store.commit('setView', 'remove')"
      >Remove Cards</div>

      <div class="navItem" @click="$store.commit('addAllRemaining')" v-show="showAddAll">Add All</div>
      <div class="navItem" @click="$store.dispatch('unSelectAll')" v-show="showRemoveAll">Remove All</div>
      <div
        class="navItem"
        @click="$store.commit('setView', 'modify')"
        v-show="showModify"
      >Modify Selected</div>
      <!-- <router-link to="/">Home</router-link> -->

      <!-- <router-link to="/about">Choose Cards: Fullscreen Edition</router-link> -->

      <!-- <router-link to="/viewGraph">View Graph: Fullscreen Edition</router-link> -->
      <div v-show="showQuickAdd" class="navDropDown">
        <div @click="handleQuickAddClick" class="navItem">Quick Add</div>
        <div :class="{active: quickAddClicked}" class="navDropDownContent">
          <typeAhead />
        </div>
      </div>
      <!-- 
      <router-link
        v-on:click.native="$store.commit('setView', 'createACard')"
        to="/createACard"
        class="navItem"
      >Create A Card</router-link>-->

      <router-link
        class="navItem"
        to="/fullScreen"
        v-show="showFSGraph"
        v-on:click.native="$store.commit('setView', 'fullScreenGraph')"
      >🅱️ig Graph</router-link>
      <router-link
        v-show="showBack"
        class="navItem"
        v-on:click.native="$store.commit('setView', 'choose')"
        to="/"
      >Split Screen Sadness</router-link>
      <router-link
        class="navItem"
        v-on:click.native="$store.commit('setView', 'about')"
        to="/about"
      >About This Site</router-link>
    </div>
    <div class="navItems" v-show="currentView === 'about'">
      <router-link class="navItem" to="/about/siteInfo">About</router-link>

      <router-link class="navItem" to="/about/faq">Important Info</router-link>

      <router-link class="navItem" to="/about/techInfo">comparecards4.me engineering blog</router-link>

      <router-link
        class="navItem"
        to="/"
        v-on:click.native="$store.commit('setView', 'choose')"
      >Home</router-link>
    </div>
  </nav>
</template>	

<style lang="scss">
.navDropDownContent {
  top: 100%;
  position: absolute;
  display: none;
  max-height: 40vh;
  overflow-y: scroll;
  width: 400px;
  border: 2px solid #9daaaf;
  border-top: none;
}

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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.navItem:hover {
  color: white;
  text-decoration: none;
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
    showBack: function() {
      return this.currentView === "fullScreenGraph";
    },
    showAddAll: function() {
      return (
        Object.keys(this.unSelectedCards).length !== 0
        // this.currentView === "choose"
      );
    },
    showFSGraph: function() {
      return (
        this.selectedCards.length !== 0 &&
        this.currentView !== "fullScreenGraph"
      );
    },
    showSelect: function() {
      return (
        this.currentView !== "choose" && this.currentView !== "fullScreenGraph"
      );
    },
    showRemove: function() {
      return (
        this.currentView !== "remove" &&
        this.currentView !== "fullScreenGraph" &&
        this.showRemoveAll
      );
    },
    showQuickAdd: function() {
      console.log(this.currentView);
      return (
        this.currentView === "modify" || this.currentView === "fullScreenGraph"
      );
    },
    showModify: function() {
      return (
        this.selectedCards.length !== 0 &&
        this.currentView !== "modify" &&
        this.currentView !== "fullScreenGraph"
      );
    }
  },
  methods: {
    handleQuickAddClick(event) {
      event.stopPropagation();
      this.quickAddClicked = !this.quickAddClicked;
      const dropDown = document.querySelector(".navDropDownContent");
      const fn = e => {
        if (e.path.indexOf(dropDown) !== -1) return;
        console.log("reached");
        this.quickAddClicked = false;
        document.body.removeEventListener("click", fn);
      };
      document.body.addEventListener("click", fn);
      // setTimeout(() => document.body.addEventListener("click", fn), 200);
    }
  }
};
</script>
