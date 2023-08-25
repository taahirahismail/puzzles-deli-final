<template>
  <div>
    <h1 class="heading">OUR SANDWICHES</h1>
    <img id="banner" src="https://i.postimg.cc/d3fnN2kd/banners.jpg" alt="banner">
    <div class="top-section">
    <button class="custom" @click="sortPrice">Sort By Price</button>
    <button class="custom" @click="sortName">Sort By Name</button>
    <select class="custom" v-model="category">
      <option selected value="" >All</option>
      <option value="Chicken">Chicken</option>
      <option value="Vegan">Vegan</option>
      <option value="Pastrami">Pastrami</option>
      <option value="Breakfast">Breakfast</option>
    </select>
    <input class="custom" type="search" v-model="search" placeholder="search something" aria-label="Search" aria-describedby="search-addon">
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 flex" v-if="products">
      <div class="col flex" v-for="product in products" :key="product">
        <div class="card" id="test">
          <div class="img-bg">
          <img
            :src="product.prodUrl"
            class="card-img-top img-fluid"
            id="image"
            :alt="product.prodName"
          />
          </div>
          <div class="card-body">
            <div class="title">
              <h5 class="card-title">{{ product.prodName }}</h5>
            </div>
            <div class="price">
    
              <p class="card-text"> R{{ product.amount }}</p>
            </div>
            <div class="button">
              <button @click="viewProduct(product.prodID)" class="btn">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/SpinnerComp.vue";
export default {
  components: {
    Spinner,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    viewProduct(prodID) {
      const chosenProd = this.products.find(
        (product) => product.prodID === prodID
      );
      this.$store.commit("setSelectedProduct", chosenProd);
      this.$router.push({ name: "ProductView", params: { prodID: prodID } });
    },

    sortPrice(){
      this.$store.commit("sortProductsByPrice")
    }, 

    sortName(){
      this.$store.commit("sortProductsByName")
    }
  },
  data() {
    return{
      search: '',
      category: '',
    }
  }
};
</script>

<style scoped>

.heading{
  font-family: 'Luckiest Guy', cursive;
  text-align: center;
  font-size: 80px;
  color: black;
}

.card-img-top{
  background-color: #f7bf3e;
  height: 100%;
}

.img-bg{
  background-color: #f7bf3e;
  padding: 10%;
  border-radius: 10px;
  margin: 2%;
  height: 200px;
  border: 4px dashed #45A245;
}

.card-title, .top-section{
  font-family: "Lalezar", cursive;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
 
}

#banner{
  width: 100%;
}

.custom{
  border: 4px dashed #EE4823;
  border-radius: 10px;
  padding: 0.7%;
}

.card{
  border: 4px dashed #45A245;
  border-radius: 10px;
  height: 26rem !important;
  margin-bottom: 10%;
  width: 90% !important;
  padding: 15px;
}

.button{
  display: flex;
  justify-content: center;
}
.price{
  font-family: "Lalezar", cursive;
}

.btn{
  font-family: "Lalezar", cursive;
  background-color: #45A245;
}

.top-section{
  padding: 4%;
  display: flex;
  justify-content: space-evenly;
}
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}

.row{
  --bs-gutter-x: 0;
  display: flex !important;
  justify-content: space-between !important ;
}

@media screen and (max-width:300px) {
  .card{
    width: 295px !important;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .searchBTN{
    width: 290px !important;
  }

  .row{
    --bs-gutter-x: 0;
  }
}

@media screen and (max-width:700px) {
  .searchBTN{
    width: 690px;
  }

  .card{
    width: 600px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .row{
    --bs-gutter-x:0;
  }
}
</style>