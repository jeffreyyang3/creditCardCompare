<template>
  <div class="home">
    <topNavbar />
    <br />
    <div class="nonNavbar">
      <CBLine />
    </div>

    <!-- <Req></Req> -->

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
  height: 10000px;
  background-color: #fefefe;
}
.nonNavbar {
  margin-top: 30px;
}
.modalButton {
  font-weight: bold;
}
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<script>
// @ is an alias to /src
import Req from "@/components/Req";
import CBLine from "@/components/CBLine";
import topNavbar from "@/components/topNavbar";
// import PlaidLink from "vue-plaid-link";

export default {
  name: "home",
  components: {
    // Req,
    CBLine,
    topNavbar
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
