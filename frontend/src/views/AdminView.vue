<template>
<main>
    <button>
        <router-link :to="{name: 'add user'}">Add User</router-link>
    </button>
    <h1>Users</h1>
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
            </tr>
        </thead>
        <tbody v-if="user">
            <AdminUser v-for="user of users" :key="user.userID" :user="user"/>
        </tbody>
        <tbody v-else>Errrrrror</tbody>
    </table><br><br>
    <button>
        <router-link :to="{name: 'add product'}">Add Product</router-link>
    </button>
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