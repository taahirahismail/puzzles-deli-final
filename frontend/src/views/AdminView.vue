<template>
  <h1 class="header">Admin</h1>
  <div>
    <h1 class="users">Users</h1>
    <addUser />
    <div class="table">
          <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Email Address</th>
          <th>Profile Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.userID">
        <tr v-if="users">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td class="image">
            <img
              :src="user.userProfile"
              :alt="user.firstName"
              loading="lazy"
              class="img-fluid image"
            />
          </td>
          <td>
            <updateUser :user="user" /><button
              class="btn"
              @click="deleteUser(user.userID)"
            >
              Delete
            </button>
          </td>
        </tr>
        <tr v-else>
          <Spinner />
        </tr>
      </tbody>
    </table>
    </div>

    <br><br>
    <div>
      <h1 class="products">Products</h1>
      <addProduct />
      <div class="table">
        <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Product Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product">
          <tr v-if="products">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.prodDesc }}</td>
            <td>
              <img
                :src="product.prodUrl"
                :alt="product.prodUrl"
                class="img-fluid image"
                loading="lazy"
              />
            </td>
            <td>
              <updateProduct :product="product" />
              <button @click="deleteProduct(product.prodID)" class="btn">
                Delete
              </button>
            </td>
          </tr>
          <tr v-else>
            <Spinner />
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/SpinnerComp.vue";
import addProduct from "../components/AddProductComp.vue";
import addUser from "../components/AddUserComp.vue";
import updateProduct from "../components/UpdateProductComp.vue";
import updateUser from "@/components/UpdateUserComp.vue";
export default {
  components: {
    Spinner,
    addProduct,
    addUser,
    updateProduct,
    updateUser,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
    product() {
      return this.$store.state.product;
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    deleteProduct(prodID) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.$store.dispatch("deleteProduct", prodID);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
    deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", id);
        setTimeout(() => {
          console.log("Deleting now...");
          location.reload();
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
*{
  font-family: "Londrina Solid", cursive;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.img-fluid{
  width: 50px;
  height: 50px;
}

.image{
  text-align: center;
}

.btn{
  border: 3px solid #ee4823;
  border-radius: 20px;
  background: #faf9e8;
}

.btn:hover {
  border: 3px solid #faf9e8;
  background: #ee4823;
  color: #faf9e8;
}


.header{
  font-family: 'Luckiest Guy', cursive;
  text-align: center;
  font-size: 80px;
  color: black;
}

.users, .products{
  font-family: 'Luckiest Guy', cursive;
  font-size: 37px;
  color: black;
  margin-left: 10px;

}

tr, th, td{
    border: 3px dashed #ee4823;
    padding: 3px;
}

th{
    text-align: center;
}

table{
    width: 100%;
}

.table{
  display: flex;
  justify-content: center;
  padding: 5px;
}

.bg-yellow{
    padding: 2%;
    border: 3px solid black;
    margin: 1%;
    background-color: #f7bf3e;
    border-radius: 30px;
}
</style>