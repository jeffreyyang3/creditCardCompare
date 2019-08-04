<template>
  <div id="req">
    <input type="text" v-model="link" class="bigInput" />
    <br />

    <button @click="makeRequest()">make a get request</button>
    <button @click="exData()">use example data</button>
    <p v-if="response">{{ response }}</p>
    <div class="accDetails" v-if="authenticated">
      <CBLine :categorySpend="categorySpend" v-if="transactions && categorySpend"></CBLine>
      <br />

      <button @click="getTransactions()">get transactions</button>
      <div v-if="transactions">
        <div
          v-for="t in transactions"
          :key="t.transaction_id"
        >{{ t.name }}: ${{ t.amount }} Category: {{ t.category[0] }}</div>
        <div id="breakdown">
          <h3>your spend breakdown</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bigInput {
  width: 300px;
}
.accDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
const axios = require("axios");
import CBLine from "@/components/CBLine";
import cards from "@/data/cards";

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
  },
  components: {
    CBLine
  },
  computed: {
    authenticated: function() {
      return this.$store.state.apiToken != null;
    }
  },
  methods: {
    async makeRequest() {
      try {
        const response = await axios.get(`/api/${this.link}`);
        this.response = response.data;
      } catch (e) {
        console.error(e);
      }
    },
    async getTransactions() {
      /*
      try {
        console.log(this.$store.getters.getApiToken);
        const response = await axios.post(
          "http://localhost:8081/transactions",
          { apiToken: this.$store.getters.getApiToken }
        );
        console.log(response.data.transactions);
        this.transactions = response.data.transactions;
        this.sumCategories();
      } catch (e) {
        console.error(e);
      } */
      await this.$store.dispatch("fetchAccData");
      this.transactions = this.$store.getters.getAccData.transactions;
      this.categorySpend = this.sumCategories();
    },
    toTwoPlaces: function(val) {
      return Math.round(val * 100) / 100;
    },
    sumCategories: function() {
      const categoryMap = {
        Travel: "travel",
        "Food and Drink": "dining"
      };
      const categorySpend = {
        dining: 0,
        travel: 0,
        groceries: 0,
        all: 0
      };
      const notCounted = new Set(["Payment", "Transfer"]);

      this.transactions.forEach(t => {
        if (!notCounted.has(t.category[0])) {
          if (categoryMap[t.category[0]]) {
            categorySpend[categoryMap[t.category[0]]] += t.amount;
          } else {
            categorySpend.all += t.amount;
          }
        }
      });
      for (let key in categorySpend) {
        categorySpend[key] = this.toTwoPlaces(categorySpend[key]);
      }
      return categorySpend;
    },
    exData: async function() {
      const response = await axios.get("/api/ex");
      this.$store.commit("setApiToken", "asdfas");
      this.$store.commit("setAccData", response.data.exampleData);
      this.transactions = this.$store.getters.getAccData.transactions;
      this.categorySpend = this.sumCategories();
    }
  },
  mounted: function() {
    console.log("req");
    console.log(cards);
  }
};
</script>
