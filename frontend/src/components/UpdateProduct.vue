<template>
<div>
    <div class="text-center">
      <a
        data-bs-toggle="modal"
        data-bs-target="#edit-product-modal"
        href="#edit-product-modal"
        class="m-2 btn btn-outline-primary text-center"
        id="edit-book-btn"
        >edit product</a
      >
    </div>

    <div class="modal" id="edit-product-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="text-center heading-font">Update Product:</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div>
            <form class="card p-3 yellow-bg">
  
        <div class="mb-3 text-font">
          <label for="prodID" class="form-label">Product ID: *</label>
          <input 
          v-model="prodID"
          type="text"
          id="prodID"
          name="prodID"
          class="form-control input-bg"
          required
          :placeholder="prodID"
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="prodName" class="form-label">Product Name: *</label>
          <input 
          v-model="prodName"
          type="text"
          id="prodName"
          name="prodName"
          class="form-control input-bg"
          required
          :placeholder="prodName"
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="quantity" class="form-label">Quantity: *</label>
          <input 
          v-model="quantity"
          type="number"
          id="quantity"
          name="quantity"
          class="form-control input-bg"
          required
          :placeholder="quantity"
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="amount" class="form-label">Price: *</label>
          <input 
          v-model="amount"
          type="number"
          id="amount"
          name="amount"
          class="form-control input-bg"
          required
          :placeholder="amount"
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="category" class="form-label">Category: *</label>
          <input 
          v-model="category"
          type="text"
          id="category"
          name="category"
          class="form-control input-bg"
          required
          :placeholder="category"
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="prodUrl" class="form-label">Product Image: *</label>
          <input 
          v-model="prodUrl"
          type="text"
          id="prodUrl"
          name="prodUrl"
          class="form-control input-bg"
          required
          :placeholder="prodUrl"
          />
        </div>
  
        <p class="text-font">* indicates a required field.</p>
  
      </form>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn m-2 add-btn text-font"
              data-bs-dismiss="modal" @click="updateProduct()"
            >
              Update Product!
            </button>
            <button type="reset" class="btn m-2 clr-btn text-font">
              Clear Fields
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>






<!-- old template -->
    <!-- <div class="p-3 col-7">
      <form class="card p-3 yellow-bg">
        <h1 class="text-center heading-font">Update Product:</h1>
  
        <div class="mb-3 text-font">
          <label for="prodID" class="form-label">Product ID: *</label>
          <input 
          v-model="prodID"
          type="text"
          id="prodID"
          name="prodID"
          class="form-control input-bg"
          required
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="prodName" class="form-label">Product Name: *</label>
          <input 
          v-model="prodName"
          type="text"
          id="prodName"
          name="prodName"
          class="form-control input-bg"
          required
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="quantity" class="form-label">Quantity: *</label>
          <input 
          v-model="quantity"
          type="number"
          id="quantity"
          name="quantity"
          class="form-control input-bg"
          required
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="amount" class="form-label">Price: *</label>
          <input 
          v-model="amount"
          type="number"
          id="amount"
          name="amount"
          class="form-control input-bg"
          required
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="category" class="form-label">Category: *</label>
          <input 
          v-model="category"
          type="text"
          id="category"
          name="category"
          class="form-control input-bg"
          required
          />
        </div>
  
        <div class="mb-3 text-font">
          <label for="prodUrl" class="form-label">Product Image: *</label>
          <input 
          v-model="prodUrl"
          type="text"
          id="prodUrl"
          name="prodUrl"
          class="form-control input-bg"
          required
          />
        </div>
  
        <p class="text-font">* indicates a required field.</p>
  
        <div class="p-3 text-center">
          <button type="submit" class="btn m-2 add-btn text-font" @click="updateProduct()">Update Product!</button>
          <button type="reset" class="btn m-2 clr-btn  text-font">Clear Fields</button>
        </div>
      </form>
    </div> -->
</template>
  
  <script>

  import axios from 'axios'
  export default {
    props: ['prodData'],
    data() {
      return {
        prodID: '',
        prodName: '',
        quantity: '',
        amount: '',
        category: '',
        prodUrl: ''
      };
    }, 
    methods: {
        async updateProduct(){
            try{
                await axios.put(`https://puzzles-deli.onrender.com/product/${this.prodID}`, {
                    prodID: this.product.prodID,
                    prodName: this.product.prodName,
                    quantity: this.product.quantity,
                    amount: this.product.amount,
                    category: this.product.category,
                    prodUrl: this.product.prodUrl,
                }
                
                )
                this.prodID = ''
                this.prodName = ''
                this.quantity = ''
                this.amount = ''
                this.category = ''
                this.prodUrl = ''
                this.$router.push('/admin')
            }
            catch(err){
                alert(err)
            }
        }
    },
    props:["id"],
        

    computed: {
        product(){
            return this.$store.state.product
        }
    }, 
    mounted(){
        this.$store.dispatch("fetchProduct", this.id),
        this.$store.dispatch("fetchProducts")
    }

  };
  </script>
  
  <style scoped>
  .yellow-bg {
    background: #F7BF3E;
  }
  
  .input-bg {
    background: #FAF9E8;
  }
  
  .heading-font {
    font-family: 'Lalezar', cursive;
  }
  
  .text-font {
    font-family: 'Londrina Solid', cursive;
  }
  
  .add-btn, .clr-btn {
    border: 3px dashed #EE4823;
    background: #FAF9E8;
  }
  </style>





