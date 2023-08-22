<template>
    <router-link :to="{name: 'product', params: {id: product.prodID}}">
        <img :src="product.prodUrl" :alt="product.prodName">
        <h2>{{product.prodName}}</h2>
        <p>{{product.amount}}</p>

    </router-link>
</template>

<script>

export default {
    props: ["product"]
}
</script>

    

