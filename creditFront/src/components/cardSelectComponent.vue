<template>
  <div
    class="cardSelectComponent"
    draggable="true"
    @click="toggleDescVis"
    v-on:dragstart="componentDragStartHandler"
    :class="{ clicked }"
  >
    <img class="cardImage" :src="getFile()" />
    <div class="cardDesc" v-if="clickable">
      <div class="cardCbInfo">
        <div
          class="cb"
          :key="$store.state.original[name].displayName + category"
          v-for="(data, category) in $store.state.original[name].categories"
        >
          <div>{{ categoryDisplayFilter(category)}}: {{ percentFilter(data.percent) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
$cardWidth: 125px;
$cardHeight: 78px;
$descHeight: 90px;

.cardSelectComponent {
  width: $cardWidth;
  // height: $cardHeight + 50px;
  margin: 10px;
}

.cardSelectComponent img {
  opacity: 1;
  width: $cardWidth;
  height: $cardHeight;
  transition: opacity 0.3s;
}

.typeAhead .cardSelectComponent:hover img {
  opacity: 0.5;
}
.cardImage {
  width: $cardWidth;
  height: $cardHeight;
}

.cardSelectComponent.clicked .cardDesc {
  height: $descHeight;
}

.cardSelectComponent .cardDesc * {
}

.cardDesc {
  margin-top: 5px;

  height: 0;
  overflow: scroll;
  transition: height 0.35s;
}

.cardSelectComponent {
  position: relative;
}
</style>
<script type="text/javascript">
export default {
  name: "cardSelectComponent",
  props: {
    name: String,
    clickable: Boolean
  },
  data: function() {
    return {
      clicked: false
      // cardName: "uber"
    };
  },

  mounted() {},

  methods: {
    getFile() {
      return require(`@/assets/cardImages/${this.name}.png`);
    },
    categoryDisplayFilter(category) {
      if (
        Object.keys(this.$store.state.original[this.name].categories).length ===
        1
      ) {
        return "All";
      } else {
        return category.charAt(0).toUpperCase() + category.slice(1);
      }
    },
    percentFilter(decimal) {
      return `${(100 * decimal).toFixed(1)}%`;
    },

    toggleDescVis() {
      this.clicked = !this.clicked;
    },

    componentDragStartHandler(event) {
      if (document.getElementById("leftSide").contains(this.$el)) {
        this.$store.commit("setDragLeft", this.name);
        return;
      }

      this.$store.commit("setDragRight", this.name);
      // event.preventDefault();
    }
  }
};
</script>
