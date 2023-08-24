<template>
    <div v-if="product">
        <h1>{{ product[0].prodName }}</h1>
        <img :src="product[0].prodUrl" :alt="product[0].prodName"/>
        <p>{{ product[0].amount}}</p>
    </div>
    <div v-else>
       no no no 
    </div>

</template>

<script>
export default {
    props: ["prodID"],
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch("fetchProduct", this.$route.params.id );
    }
}
</script>