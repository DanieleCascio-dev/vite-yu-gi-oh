<script>
export default {
  props: {
    image: Array,
    name: String,
    type: String,
  },
};
</script>

<template>
  <div class="card">
    <img :src="image[0].image_url" alt="" />
    <div class="info">
      <h5>{{ name }}</h5>
      <p>{{ type ? type : "Nessun archetipo" }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  .info {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding: 1rem 0.5rem;
    text-align: center;
    background-color: orange;
    min-height: 120px;
    width: 100%;

    h5 {
      margin-bottom: 0.5rem;
      color: white;
    }

    p {
      font-size: 0.8rem;
    }
  }
}
</style>
