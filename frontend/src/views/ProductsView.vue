<template>
<input type="text" v-model="search" placeholder="Search...">
<button @click="sortPriceLowToHigh()">Sort by Price - Low to High</button>
<button @click="sortPriceHighToLow()">Sort by Price - High to Low</button>
<select v-model="category" @click="filter()">
    <option value="">All</option>
    <option v-for="category in categories" :key="category">{{category}}</option>
</select>
<!-- <div v-if="products">

<div v-for="product in filteredProducts" :key="product.prodID">
    <img :src="product.prodUrl" :alt="product.prodName">
        <h2>{{product.prodName}}</h2>
        <p>{{product.amount}}</p>
</div>
</div>
<v-else>
    <loader/>
</v-else> -->
<!-- <button>All</button>
<button>Chicken</button>
<button>Pastrami</button>
<button>Breakfast</button>
<button>Vegan</button> -->
<div v-if="products">
    <Product v-for="product of filteredProducts" :key="product.prodID" :product="product" />
</div>
<div v-else>
   <loader/>
</div>
</template>

<script>
import loader from '@/components/SpinnerComponent.vue'
import Product from '@/components/SingleProduct.vue'; 
export default {
    data(){
        return {
            search:"", 
            category: "",
            filteredProducts: [],
            categories: ["Chicken", "Vegan", "Breakfast", "Pastrami"]

        }
    },
    components: {
        Product, loader
    }, 
    methods:{
        sortPriceLowToHigh(){
            this.filteredProducts.sort((a, b) => a.amount - b.amount);
            // this.$store.commit("sortProducts");
        },
        sortPriceHighToLow(){
            this.filteredProducts.sort((a, b) => b.amount - a.amount);
            // this.$store.commit("sortProducts");
        },

        filter(){
            this.filteredProducts = this.products.filter(product => {
                return this.category === "" || product.category === this.category;
            })
        }

    },
    computed: {
        products(){
            return this.$store.state.products || [];
            
            
                // let isMatch = true;
                // if(!product.prodName.toLowerCase().includes(this.search.toLowerCase())){
                //     isMatch = false;
                // }
                // if(this.category !=="All" && this.category !== product.category){
                //     isMatch = false
                // }
                // return isMatch
            }
        },
        mounted(){
            this.$store.dispatch("fetchProducts").then(() => {
                this.filter();
            })
        }
}
    
    
</script>