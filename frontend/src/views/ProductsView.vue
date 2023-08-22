<template>
<div v-if="products">
    <Product v-for="product of products" :key="product.prodID" :product="product" />
</div>
<div v-else>
    whooooops
</div>
</template>

<script>
import Product from '@/components/SingleProduct.vue'; 
export default {
    components: {
        Product
    }, 
    computed: {
        products(){
            return this.$store.state.products
        }
    }, 
    mounted(){
        this.$store.dispatch("fetchProducts")
    }
}
</script>