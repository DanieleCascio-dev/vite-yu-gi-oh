<script>
import AppContent from "./components/AppContent.vue";
import AppHeader from "./components/AppHeader.vue";
import axios from "axios";
import { store } from "./store.js";
import { registerRuntimeHelpers } from "@vue/compiler-core";
export default {
  components: { AppHeader, AppContent },
  data() {
    return {
      store,
    };
  },
  created() {
    axios
      .get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${this.store.cardIndex}`
      )
      .then((resp) => {
        this.store.loader = true;
        this.store.cardList = resp.data.data;
        this.store.loader = false;
      });
  },
};
</script>

<template>
  <AppHeader />
  <AppContent />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
