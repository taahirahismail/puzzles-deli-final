
import { createStore } from 'vuex'
import axios from 'axios';
const url = "https://puzzles-deli.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    selectedProduct: null,
    products: null,
    product: null,
    spinner: null,
    message: null,
    asc: true, 

  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;

    },
    setProduct(state, product) {
      state.product = product;
  
    },
    setSelectedProduct(state, product){
      state.selectedProduct = product
    },
    setSpinner(state, spinner) {
      state.spinner = spinner;
    },
    setMessage(state, message) {
      state.message = message;
    },

    sortProductsByPrice: (state) => {
      state.products.sort((a, b) => { 
        return a.amount - b.amount; 
      }); 
      if(!state.asc){
        state.products.reverse(); 
      }
      state.asc = !state.asc
    },

    sortProductsByName: (state) => {
      state.products.sort((a, b) => { 
        return a.prodName.localeCompare(b.prodName); 
      }); 
      if(!state.asc){
        state.products.reverse(); 
      }
      state.asc = !state.asc
    }

  },
  actions: {

    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${url}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMessage", "an error occured in fetching users");
      }
    },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${url}user`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMessage", "an error occured in fetching a single user");
      }

    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${url}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMessage", "an error occured in fetching products");



      }
    },
    async fetchProduct(context) {
      try {
        const { data } = await axios.get(`${url}product`);
        context.commit("setProduct", data.results);
      } catch (e) {
        context.commit("setMessage", "an error occured in fetching a single product");
      }
    },
    async register(context, payload) {
      try {
        const res = await axios.post(`${url}register`, payload);
        const { msg, err } = await res.data;
        if (err) {
          context.commit("setMessage", "Something went wrong in the registration process");
        }
        if (message) {
          context.commit("setUser", message);
        }
      } catch (e) {
        context.commit("setMessage", "an error occured");

      }
    },
    async updateUser(context, payload) {
      console.log(payload)
      try {
        const res = await axios.patch(`${url}user/${payload.userID}`, payload.data);
        const { message, err } = res.data
        if(message){
          context.commit("setUser", message)
        } else{
          context.commit("setMessage", e)
        }
      } catch (e) {
        context.commit("setMessage", "an error occured in updating a user");
      }
    },

    async deleteUser(context, id) {
      try {
        const { res } = await axios.delete(`${url}user/${id}`);
        const {message, err} = res.data
        if(err){
          console.error("An error has occured: ", err)
          context.commit("setMessage", "An error has occured in deleting a user")
        }
        if(message){
          context.dispatch("fetchProducts")
          context.commit('setUser', message)
          console.log("User deleted successfully")
        }
      } catch (e) {
        context.commit("setMessage", "an error occured in deleting a user");
      }
    },
    async addProduct(context, payload) {
      console.log("REACHED");
      try {
        const { res } = await axios.post(`${url}product`, payload);
        const { message, err } = await res.data;
        console.log(message, err);
        if (message) {
          context.commit("setProduct", message);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMessage", err);
        }
      } catch (e) {
        context.commit("setMessage", "an error occured while adding a product");
      }
    },
    async updateProduct(context, payload) {
      console.log(payload)
      try {
        const res = await axios.patch(`${url}product/${payload.prodID}`, payload);
        const { message, err } = await res.data;
        console.log(message, err);
        if (err) {
          console.log("An error has occured: ", err);
          context.commit("setMessage", err);
        }
        if (message) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", message);
          context.commit("setMessage", "Successfully updated product.");
        }
      } catch (e) {
        context.commit("setMessage", e);
      }
    },
    async deleteProduct(context, prodID) {
      console.log("reached");
      try {
        const { res } = await axios.delete(`${url}product/${prodID}`);
        const { message, err } = await res.data;
        if (err) {
          alert("an error has occured, please try again");
        }
        if (message) {
          context.commit("setProduct", message);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMessage", "An error occured");
        }
      } catch (e) {
        context.commit("setMessage", "an error occured while deleting a product");
      }
    },
  },
  modules: {},
});

