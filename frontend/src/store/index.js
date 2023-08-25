<<<<<<< HEAD
import { createStore } from "vuex";
import axios from "axios";
const miniURL = "https://puzzles-deli.onrender.com/";
=======
import { createStore } from 'vuex'
import axios from 'axios';
const url = "https://puzzles-deli.onrender.com/";
>>>>>>> 1d31f117115c387884c7459da52dc913177c4e9f

export default createStore({
  state: {
    users: null,
<<<<<<< HEAD
    user: null,
    selectedProduct: null,
    products: null,
    product: null,
    spinner: null,
    msg: null,
    asc: true, 
=======
    user: null, 
    spinner: null, 
    token: null, 
    message: null, 
    
>>>>>>> 1d31f117115c387884c7459da52dc913177c4e9f
  },
  getters: {},
  mutations: {
<<<<<<< HEAD
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
      console.log(products);
    },
    setProduct(state, product) {
      state.product = product;
      console.log(product);
=======
    setProducts: (state, value) => {
      state.products = value
    }, 

    setProduct: (state, value) => {
      state.product = value
    }, 

    setUsers: (state, value) => {
      state.users = value
    }, 
    
    setUser: (state, value) => {
      state.user = value;
>>>>>>> 1d31f117115c387884c7459da52dc913177c4e9f
    },
    setSelectedProduct(state, product){
      state.selectedProduct = product
    },
    setSpinner(state, spinner) {
      state.spinner = spinner;
    },
    setMsg(state, msg) {
      state.msg = msg;
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
<<<<<<< HEAD
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${miniURL}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
=======

    // products
    async fetchProducts (context){
      try{
        const res = await axios.get(`${url}products`); 
        context.commit("setProducts", res.results); 
>>>>>>> 1d31f117115c387884c7459da52dc913177c4e9f
      }
    },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${miniURL}user`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
<<<<<<< HEAD
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${miniURL}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
=======
    }, 

    async fetchProduct (context, id){
      try{
        const res = await axios.get(`${url}product/${id}`)
        context.commit("setProduct", res.result)
>>>>>>> 1d31f117115c387884c7459da52dc913177c4e9f
      }
    },
    async fetchProduct(context) {
      try {
        const { data } = await axios.get(`${miniURL}product`);
        context.commit("setProduct", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
<<<<<<< HEAD
    async register(context, payload) {
      try {
        const res = await axios.post(`${miniURL}register`, payload);
        const { msg, err } = await res.data;
        if (err) {
          context.commit("setMsg", "Something went wrong");
        }
        if (msg) {
          context.commit("setUser", msg);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
=======
    async addProduct(context, payload){
      try{
        const res = await axios.post(`${url}product`, payload); 
        const {message, err} = await res.data;
        console.log(message, err);
        if(message){
          context.commit("setProduct", message);
          context.commit("setSpinner", false); 
        }
        else{
          context.commit("setMessage", err);
        }
      }
      catch(e){
        context.commit("setMessage", "error in adding product")
      }
    },
    async updateProduct(context, payload){
      try{
        const res = await axios.put(`${url}product/${payload.prodID}`, payload)
        console.log("response: ", res);
        alert("update succesful")
        let {results, err} = await res.data; 
        if(results){
          context.commit("setProduct", results[0])
        }
        else{
          context.commit("setMessage", err)
        }
      }
      catch(err){
        context.commit("setMessage", err)
      }
    },

    async deleteProduct(context, prodID) {
      try {
        const res = await axios.delete(`${url}product/${prodID}`);
        const { message, err } = await res.data;
        if (err) {
          alert("error while deleting");
        }
        if (message) {
          context.commit("setProduct", message);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMessage", "An error occured while deleting");
        }
      } 
      catch (e) {
        context.commit("setMessage", "an error occured");
      }
    },


     

    // users

    async fetchUsers(context){
      try{
        const res = await axios.get(`${url}users`)
        context.commit("setUsers", res.results)
>>>>>>> 1d31f117115c387884c7459da52dc913177c4e9f
      }
    },
    async updateUser(context, payload) {
      console.log(payload)
      try {
        const res = await axios.patch(`${miniURL}user/${payload.userID}`, payload.data);
        const { msg, err } = res.data
        if(msg){
          context.commit("setUser", msg)
        } else{
          context.commit("setMsg", e)
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
<<<<<<< HEAD
    async deleteUser(context, id) {
      try {
        const { res } = await axios.delete(`${miniURL}user/${id}`);
        const {msg, err} = res.data
        if(err){
          console.error("An error has occured: ", err)
          context.commit("setMsg", "An error has occured")
        }
        if(msg){
          context.dispatch("fetchProducts")
          context.commit('setUser', msg)
          console.log("User deleted successfully")
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async addProduct(context, payload) {
      console.log("REACHED");
      try {
        const { res } = await axios.post(`${miniURL}product`, payload);
        const { msg, err } = await res.data;
        console.log(msg, err);
        if (msg) {
          context.commit("setProduct", msg);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async updateProduct(context, payload) {
      console.log(payload)
      try {
        const res = await axios.patch(`${miniURL}product/${payload.prodID}`, payload);
        const { msg, err } = await res.data;
        console.log(msg, err);
        if (err) {
          console.log("An error has occured: ", err);
          context.commit("setMsg", err);
        }
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
          context.commit("setMsg", "Successfully updated product.");
        }
      } catch (e) {
        context.commit("setMsg", e);
      }
    },
    async deleteProduct(context, prodID) {
      console.log("reached");
      try {
        const { res } = await axios.delete(`${miniURL}product/${prodID}`);
        const { msg, err } = await res.data;
        if (err) {
          alert("an error has occured, please try again");
        }
        if (msg) {
          context.commit("setProduct", msg);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", "An error occured");
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
=======

    async fetchUser(context, id){
      try{
        const res = await axios.get(`${url}user/${id}`);
        let {results, err} = await res.data; 
        if(results){
          context.commit("setUser", results)
        }
        else{
          context.commit("setMessage", err)
        }
      }
      catch(e){
        context.commit("setMessage", "error is getting single user")
      }
    },

    async registerUser(context, payload){
      try{
        const res = await axios.post(`${url}register`, payload);
        console.log("Response:  ", res)
        alert('successfully added')

        const {results, message, err} = await res.data;
        if(results){
          context.commit("setUser", results);
          context.commit("setMessage", message)
        }
        else{
          context.commit("setMessage", err)
        }
      }
      catch(error){
        console.error(error);
      }
    },

    async updateUser (context, payload){
      console.log(payload)
      try{
        const res = await axios.put(`${url}/user/${payload.userID}`, payload.data);
        const {message, err} = res.data
        if(message){
          context.commit("setUser", message)
        }
        else{
          context.commit("setMessage", err)
        }
      }
      catch(err){
        context.commit("setMessage", "error in updating user");
      }
    },

    async deleteUser (context, id){
      try{
        await axios.delete(`${url}user/${id}`);
        context.commit("setMessage", "Successfully deleted"); 
        context.dispatch("getUsers")
      }
      catch(error){
        context.commit("setMessage", "Error while deleting user");
      }
    }

    

>>>>>>> 1d31f117115c387884c7459da52dc913177c4e9f
  },
  modules: {},
});

