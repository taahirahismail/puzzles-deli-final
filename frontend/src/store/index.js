import { createStore } from 'vuex'
import axios from 'axios';
const url = "https://puzzles-deli.onrender.com/";

export default createStore({
  state: {
    products: null, 
    product: null, 
    selectedProduct: null, 
    users: null,
    user: null, 
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
    
    setUser: (state, value) => {
      state.user = value;
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

    // products
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
        const res = await axios.get(`${url}product/${id}`)
        context.commit("setProduct", res.result)
      }
      catch(e){
        context.commit("setMessage", "Error fetching a sinlge product")
      }
    },
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
      }
      catch(e){
        context.commit("setMessage", "Error in fetching users")
      }
    },

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

    

  },
  
})
