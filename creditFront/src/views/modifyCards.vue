<template>
  <div class="modifyCards">
    <div class="selectedCards" v-for="card in selectedCards">
      <cardSelectComponent :clickable="false" :name="card.name" />
    </div>
  </div>
</template>

<style scoped >
.selectedCards {
  padding-top: 10px;
}
</style>

<script>
import cardSelectComponent from "@/components/cardSelectComponent";
import { mapState } from "vuex";
export default {
  name: "Req",
  components: { cardSelectComponent },
  computed: {
    ...mapState(["selectedCards"])
  },

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
