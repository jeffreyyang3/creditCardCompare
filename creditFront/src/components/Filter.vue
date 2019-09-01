<template>
  <div class="filterContainer">
    <select v-model="selected">
      <option value="#noFilter">No Filter</option>
      <option v-for="option in options" :value="option" :key="Math.random() + option ">{{ option }}</option>
    </select>
  </div>
</template>


<script>
export default {
  name: "cardFilter",
  props: {
    name: String,
    options: Array
  },
  data: function() {
    return {
      selected: "#noFilter"
    };
  }
};
</script>