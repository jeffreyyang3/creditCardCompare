<template>
  <div class="home">
    <Req></Req>
    <!-- <plaid-link
      env="sandbox"
      publicKey="33eac334a5da2d06e639efeb928fb0"
      clientName="jeffreApp"
      product="transactions"
      v-bind="{ onSuccess }"
    >
      <h4>open plaid link</h4>
    </plaid-link>-->
  </div>
</template>
<style>
body {
  background-color: #fefefe;
}
</style>
<script>
// @ is an alias to /src
import Req from "@/components/Req";
// import PlaidLink from "vue-plaid-link";

export default {
  name: "home",
  components: {
    Req
    // PlaidLink
  },
  methods: {
    onSuccess(token) {
      console.log("success");
      console.log(token);
      this.$store.commit("setPublicToken", token);
      this.$store.dispatch("exchangeToken", token);
      console.log(this.$store);
    }
  }
};
</script>
