<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
      emits: ["filter"],
    };
  },
};
</script>

<template>
  <select
    name="Archetype"
    id=""
    @change="($event) => $emit('filter')"
    v-model="store.searchFilter"
  >
    <option disabled value=""></option>

    <option value="">All</option>
    <option value="Alien">Alien</option>
    <option value="Ally of justice">Ally of justice</option>
    <option value="Ancient Gear">Ancient Gear</option>
  </select>
</template>

<style scoped lang="scss">
select {
  margin: 1rem;
}
</style>
