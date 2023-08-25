<template>
<<<<<<< HEAD
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
=======
    <div v-if="product">
        <img :src="product.prodUrl" :alt="product.prodName">
        <h2>{{product.prodName}}</h2>
        <p>{{product.amount}}</p>
    </div>
    <div v-else>
        <spinner/>
    </div>
        

</template>

<script>

import spinner from '@/components/SpinnerComponent.vue'

export default {
    props: ["product"], 

    components:{
        spinner
    },

    computed:{
        product(){
            return this.$store.state.selectedProduct; 
        },
    },
}
>>>>>>> 1d31f117115c387884c7459da52dc913177c4e9f
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
