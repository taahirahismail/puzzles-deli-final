<template>
<div v-if="products">
    <Product v-for="product of products" :key="product.prodID" :product="product" />
</div>
<div v-else>
   <loader/>
</div>
</template>

<script>
import loader from '@/components/SpinnerComponent.vue'
import Product from '@/components/SingleProduct.vue'; 
export default {

    components: {
        Product, loader
    }, 

    computed: {
        products(){
            return this.$store.state.products;
        }
    }, 

    mounted(){
        this.$store.dispatch("fetchProducts");
    }

}
    
    
</script>