<template>
  <div class="filterContainer">
    <div class="filterName">{{ name }}</div>
    <select
      @change="$emit('optionChange', selected) "
      class="form-control filterOptions"
      v-model="selected"
    >
      <option v-for="option in options" :value="option" :key="Math.random() + option ">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>
.filterContainer {
  display: flex;
}

.filterOptions {
  width: 25%;
}
</style>


<script>
export default {
  name: "cardFilter",
  props: {
    name: String,
    options: Array
  },
  data: function() {
    return {
      selected: "No Filter"
    };
  }
};
</script>