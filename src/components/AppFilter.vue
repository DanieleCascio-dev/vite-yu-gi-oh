<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
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
    <option value=""></option>
    <option value="Alien">Alien</option>
    <option value="Ally of justice">Ally of justice</option>
    <option value="Ancient Gear">Ancient Gear</option>
  </select>
</template>
