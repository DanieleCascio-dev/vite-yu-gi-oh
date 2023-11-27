<script>
export default {
  props: {
    image: String,
    name: String,
    type: String,
  },
};
</script>

<template>
  <div class="card">
    <img :src="image[0].image_url" alt="" />
    <div class="info">
      <h4>{{ name }}</h4>
      <h5>{{ type }}</h5>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
</style>
