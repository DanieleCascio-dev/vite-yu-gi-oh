import { reactive } from "vue";

export const store = reactive({
  cardList: [],
  loader: true,
  cardIndex: 20,
  searchFilter: "",
});
