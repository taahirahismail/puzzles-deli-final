<template>
<tr>
    <td>{{product.prodID}}</td>
    <td>{{product.prodName}}</td>
    <td>{{product.quantity}}</td>
    <td>{{product.amount}}</td>
    <td>{{product.category}}</td>
    <td>{{product.prodUrl}}</td>
    <td>
        <div>
            <router-link :to="{name: 'update product', params: {id: product.prodID}}">
                <button>Edit</button>
            </router-link>
            <button @click="deleteProduct(product.prodID)">Delete</button>
        </div>
    </td>
</tr>
</template>

<script>
import axios from 'axios'

export default{
    props: [
        "product"
    ], 
    methods: {
        async deleteProduct(id){
            try{
                await axios.delete(`https://puzzles-deli.onrender.com/product/${id}`)
                this.$store.dispatch("fetchProducts")
                window.location.reload();
            }
            catch(err){
                alert(err)
            }
        }
    }
}
</script>
<style scoped>
table, tr, td{
    border: 3px solid black;
}
</style>
