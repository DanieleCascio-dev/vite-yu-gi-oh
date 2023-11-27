<script>
import AppCard from "./AppCard.vue";
import { store } from "../store.js";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="card in store.cardList">
        <AppCard />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 70%;
  margin: 0 auto;
  margin-top: 2rem;
  background-color: white;
  min-height: 500px;
  padding: 3rem;

  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    .col {
      width: calc(100% / 5 - 0.5rem);
    }
  }
}
</style>
