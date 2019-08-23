<template>
  <div class="modifyCards"></div>
</template>

<style>
</style>

<script>
export default {
  name: "Req",
  data: function() {
    return {
      link: "pay",
      transactions: null,
      categorySpend: {},
      placeholder: "spend breakdown",
      response: null
    };
  }
};
</script>
