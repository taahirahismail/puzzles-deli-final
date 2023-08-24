import { createStore } from 'vuex'
import axios from 'axios';
const url = "https://puzzles-deli.onrender.com/products/";

export default createStore({
  state: {
    products: null, 
    product: null, 
    selectedProduct: null, 
    users: null,
    spinner: null, 
    token: null, 
    message: null, 
    
  },
  mutations: {
    setProducts: (state, value) => {
      state.products = value
    }, 

    setProduct: (state, value) => {
      state.product = value
    }, 

    setUsers: (state, value) => {
      state.users = value
    }, 
    setSelectedProduct(state, product){
      state.selectedProduct = product
    },

    setSpinner(state, value){
      state.spinner = value;
    }, 

    setToken(state, token){
      state.token = token
    }, 
    setMessage(state, message){
      state.message = message
    }

  },
  actions: {
    async fetchProducts (context){
      try{
        const res = await axios.get(`${url}products`); 
        context.commit("setProducts", res.results); 
      }
      catch(e){
        context.commit("setMessage", "unable to fetch products");
      }
    }, 

    async fetchProduct (context, id){
      try{
        const res = await axios.get(`${url}products/${id}`)
        context.commit("setProduct", res.result)
      }
      catch(e){
        context.commit("setMessage", "Error fetching a sinlge product")
      }
    }, 

    async fetchUsers(context){
      try{
        const res = await axios.get(`${url}users`)
        context.commit("setUsers", res.results)
      }
      catch(e){
        context.commit("setMessage", "Error in fetching users")
      }
    }

    async registerUser(context, payload){
      try{
        const res = await axios.post
      }
    }

    async updateProducts (context){

    }
  },
  
})
