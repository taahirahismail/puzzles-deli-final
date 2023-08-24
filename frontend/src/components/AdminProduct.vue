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
            <update-product/>
            <button @click="deleteProduct(product.prodID)">Delete</button>
        </div>
    </td>
</tr>
</template>

<script>
import axios from 'axios'
import UpdateProduct from '@/components/UpdateProduct.vue'

export default{
    props: [
        "product"
    ],
    components:{UpdateProduct},
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
