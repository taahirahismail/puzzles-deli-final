import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null, 
    product: null, 
    users: null,
    asc: true
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

    sortProducts: (state) => {
      state.products.sort((a, b) => {
        return a.amount - b.amount;
      }); 
      if (!state.asc){
        state.products.reverse(); 
      }
      state.asc= !state.asc
    }
  },
  actions: {
    async fetchProducts (context){
      try{
        let {results} = await(await fetch("https://puzzles-deli.onrender.com/products/")).json()
        if(results){
          context.commit("setProducts", results)
        }
        else{alert("error")}
      }
      catch(e){
        console.error(e)
      }
    }, 

    async fetchProduct (context, id){
      try{
        let {result} = await(await fetch("https://puzzles-deli.onrender.com/product/" + id)).json()
        if(result){
          context.commit("setProduct", result)
        }
        else{alert("error")}
      }
      catch(e){
        console.error(e)
      }
    }, 

    async fetchUsers (context){
      try{
        let {results} = await(await fetch("https://puzzles-deli.onrender.com/users")).json()
        if(results){
          context.commit("setUsers", results)
        }
        else{alert("error")}
      }
      catch(e){
        console.error(e)
      }
    }
  },
  
})
