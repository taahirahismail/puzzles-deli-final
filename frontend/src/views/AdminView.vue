<template>
<main>
    <h1>ADMIN</h1>
    <div>
        <AddUser />
    </div>
    <h1>Users</h1>
    <div class="bg-yellow">
        <table>
        <thead>
            <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Email Address</th>
                <th>Password</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody v-if="users">
            <AdminUser v-for="user of users" :key="user.userID" :user="user"/>
        </tbody>
        <tbody v-else>Errrrrror</tbody>
    </table>
    </div>
    <br><br>

    <div>
        <add-product/>

    </div>
    <h1>Products</h1>
    <table>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody v-if="products">
            <AdminProduct v-for="product of products" :key="product.prodID" :product="product"/>
        </tbody>
        <tbody v-else>Errrrrror</tbody>
    </table>
</main>
</template>

<script>
import AddUser from '@/components/AddUser.vue'
import AddProduct from '@/components/AddProduct.vue'
import AdminUser from '@/components/AdminUser.vue'
import AdminProduct from '@/components/AdminProduct.vue'
export default {
    components: {AdminUser, AdminProduct, AddProduct, AddUser}, 
    computed: {
        users(){
            return this.$store.state.users
        },
        products(){
            return this.$store.state.products
        }
    },
    mounted(){
        this.$store.dispatch("fetchUsers")
        this.$store.dispatch("fetchProducts")
    }
}
</script>

<style scoped>


tr, th{
    border: 3px dashed #ee4823;
}

th{
    text-align: center;
}

table{
    width: 100%;
}



.bg-yellow{
    padding: 2%;
    border: 3px solid black;
    margin: 1%;
    background-color: #f7bf3e;
    border-radius: 30px;
}
</style>