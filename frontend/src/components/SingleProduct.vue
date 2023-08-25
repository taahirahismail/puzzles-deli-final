<template>

  <div class="single-view">
    <div v-if="product" class="card">
      <div>
        <div class="image-section">
          <img :src="product.prodUrl" :alt="product.prodName" />
        </div>
        <h1 class="text-center">{{ product.prodName }}</h1>
        <p class="fs-4">Category: {{ product.category }}</p>
        <p>{{ product.prodDesc }}</p>
        <p class="fs-2">Price: R{{ product.amount }}</p>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/SpinnerComp.vue";
export default {
  components: {
    Spinner,
  },
  computed: {
    product() {
      return this.$store.state.selectedProduct;
    },
  },
};

</script>

<style scoped>
  *{
  background-color: #faf9e8;
}

.single-view{
  display: flex;
  justify-content: center;
}
.card{
  width: 450px;
  border: 4px dashed #45A245;
  font-family: "Lalezar", cursive;
  padding: 8px;
  border-radius: 15px;
}

img{
  width: 70%;
  background-color: #f7bf3e;
}

.image-section{
  display: flex;
  justify-content: center;
  border: 4px dashed #45A245;
  border-radius: 15px;
  background-color: #f7bf3e;
}



</style>
