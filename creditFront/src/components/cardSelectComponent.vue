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
      <h5>asdf</h5>
      <h5>fadsfasfadsfadsfasd</h5>
      <h5>fasdfasd fsfdadsf fd</h5>
      <h5>fdfdfd</h5>
      <h5>iadsf</h5>
      <h5>dfd</h5>
      <h5>fd</h5>
      <h5>sasdfasdfasdfasdf</h5>
      <h5>asdf asdfasd fdfdfdfasdf</h5>
    </div>
  </div>
</template>
<style scoped lang="scss">
$cardWidth: 125px;
$cardHeight: 78px;
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
  transition: opacity 0.3s;
}
// .cardSelectComponent.clicked img,
// .cardSelectComponent:hover img {
//   opacity: 0.8;
// }
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
