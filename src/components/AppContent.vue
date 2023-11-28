<script>
import AppCard from "./AppCard.vue";
import { store } from "../store.js";
import axios from "axios";
export default {
  data() {
    return {
      store,
      listContent: "",
    };
  },
  components: { AppCard },
  methods: {
    nextPage() {
      this.store.cardIndex += 20;

      axios
        .get(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${this.store.cardIndex}`
        )
        .then((resp) => {
          this.store.loader = true;
          this.store.cardList = resp.data.data;
          this.store.loader = false;
          console.log(this.store.cardList);
        });
    },
    prevPage() {
      if (this.store.cardIndex === 0) {
        return;
      } else {
        this.store.cardIndex -= 20;
        axios
          .get(
            `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${this.store.cardIndex}`
          )
          .then((resp) => {
            this.store.loader = true;
            this.store.cardList = resp.data.data;
            this.store.loader = false;
            console.log(this.store.cardList);
          });
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div v-if="this.store.loader">Loading....</div>
      <div class="col" v-for="card in store.cardList" v-else>
        <AppCard
          :image="card.card_images"
          :name="card.name"
          :type="card.archetype"
        />
      </div>
      <button @click="prevPage">Prev</button>
      <button @click="nextPage">Next</button>
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
    gap: 1rem;
    justify-content: center;
    align-items: stretch;

    .col {
      width: calc(100% / 5 - 1rem);
    }
  }
}
</style>
