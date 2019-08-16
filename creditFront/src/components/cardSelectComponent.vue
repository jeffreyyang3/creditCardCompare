<template>
  <div
    class="cardSelectComponent"
    draggable="true"
    @click="toggleDescVis"
    v-on:dragstart="componentDragHandler"
    :class="{ clicked }"
  >
    <img class="cardImage" :src="getFile()" />
    <div class="cardDesc">
      <h3>placeholder</h3>
      <h3>detail</h3>
      <h3>long text long text long text</h3>
      <h3>adsf</h3>
      <h3>fd</h3>
      <h3>fd</h3>
      <h3>ff</h3>
      <h3>ffff</h3>
      <h3>waddup</h3>
    </div>
  </div>
</template>
<style scoped lang="scss">
$cardWidth: 250px;
$cardHeight: 158px;
$descHeight: 180px;

.cardSelectComponent {
  width: $cardWidth;
  // height: $cardHeight + 50px;
  margin: 10px;
}
.cardSelectComponent img {
  opacity: 1;
  width: $cardWidth;
  height: $cardHeight;
}
.cardSelectComponent.clicked img {
  opacity: 0.8;
}
.cardImage {
  width: $cardWidth;
  height: $cardHeight;
}

.cardSelectComponent.clicked .cardDesc {
  height: $descHeight;
}

.cardSelectComponent .cardDesc * {
  margin-left: 10px;
}
.cardDesc {
  margin-top: 5px;

  height: 0;
  overflow: scroll;
  transition: height 0.25s;
}

.cardSelectComponent {
  position: relative;
}
</style>
<script type="text/javascript">
export default {
  name: "cardSelectComponent",
  props: {
    name: String
  },
  data: function() {
    return {
      clicked: false
      // cardName: "uber"
    };
  },
  mounted() {
    console.log("dfdfdfdfdf");
  },
  methods: {
    getFile() {
      return require(`@/assets/cardImages/${this.name}.png`);
    },
    toggleDescVis() {
      this.clicked = !this.clicked;
    },
    componentDragHandler(event) {
      console.log(event.target, "drag handler");
      // event.preventDefault();
    }
  }
};
</script>
