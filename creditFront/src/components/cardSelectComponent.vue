<template>
  <div class="cardSelectComponent">
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

.cardSelectComponent {
  width: $cardWidth;
  height: $cardHeight;
  margin: 3px;
}
.cardImage {
  width: $cardWidth;
  height: $cardHeight;
}
.cardSelectComponent:hover img {
  opacity: 0.15;
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
}
.cardSelectComponent:hover .cardDesc {
  opacity: 1;
}
.cardDesc {
  padding: 10px;
  overflow: scroll;
  width: $cardWidth;
  height: $cardHeight;
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
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
      // cardName: "uber"
    };
  },
  mounted() {
    console.log("dfdfdfdfdf");
  },
  methods: {
    getFile() {
      return require(`@/assets/cardImages/${this.name}.png`);
    }
  }
};
</script>
