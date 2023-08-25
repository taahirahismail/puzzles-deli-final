<template>
  <div>
    <div class="button">
      <a
        data-bs-toggle="modal"
        data-bs-target="#add-product-modal"
        href="#add-product-modal"
        class="m-2 btn btn-outline-danger text-center"
        id="add-book-btn"
        >Add Product</a
      >
    </div>

    <div class="modal" id="add-product-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="text-center heading-font">Add Product:</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div>
            <form
              class="p-3 yellow-bg"
            >
              

              <div class="mb-3 text-font">
                <label for="prodID" class="form-label">Product ID: *</label>
                <input
                  v-model="model.product.prodID"
                  type="text"
                  id="prodID"
                  name="prodID"
                  class="form-control input-bg"
                  placeholder="eg: CHM001"
                  required oninvalid="this.setCustomValidity('Please insert productID')"
            oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3 text-font">
                <label for="prodName" class="form-label">Product Name: *</label>
                <input
                  v-model="model.product.prodName"
                  type="text"
                  id="prodName"
                  name="prodName"
                  class="form-control input-bg"
                  placeholder="eg: Chicken Mayo"
                  required oninvalid="this.setCustomValidity('Please insert product name')"
            oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3 text-font">
                <label for="quantity" class="form-label">Quantity: *</label>
                <input
                  v-model="model.product.quantity"
                  type="number"
                  id="quantity"
                  name="quantity"
                  class="form-control input-bg"
                  required oninvalid="this.setCustomValidity('Please insert quantity')"
            oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3 text-font">
                <label for="amount" class="form-label">Price: *</label>
                <input
                  v-model="model.product.amount"
                  type="number"
                  id="amount"
                  name="amount"
                  class="form-control input-bg"
                  required oninvalid="this.setCustomValidity('Please insert price')"
            oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3 text-font">
                <label for="category" class="form-label">Category: *</label>
                <input
                  v-model="model.product.category"
                  type="text"
                  id="category"
                  name="category"
                  class="form-control input-bg"
                  placeholder="eg: Chicken"
                  required oninvalid="this.setCustomValidity('Please insert category')"
            oninput="this.setCustomValidity('')"
                />
              </div>
              <div class="mb-3 text-font">
                <label for="description" class="form-label">Description: *</label>
                <input
                  v-model="model.product.prodDesc"
                  type="text"
                  id="description"
                  name="description"
                  class="form-control input-bg"
                  placeholder="eg: This sandwich is made with love :)"
                  required oninvalid="this.setCustomValidity('Please insert product description')"
            oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3 text-font">
                <label for="prodUrl" class="form-label">Product Image: *</label>
                <input
                  v-model="model.product.prodUrl"
                  type="text"
                  id="prodUrl"
                  name="prodUrl"
                  class="form-control input-bg"
                  placeholder="Insert PostImages Link Here!"
                  required oninvalid="this.setCustomValidity('Please insert product image')"
            oninput="this.setCustomValidity('')"
                />
              </div>

              <p class="text-font">* indicates a required field.</p>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn m-2 add-btn text-font"
              data-bs-dismiss="modal" @click="addProduct()"
            >
              Add Product!
            </button>
            <button type="reset" class="btn m-2 clr-btn text-font">
              Clear Fields
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        product: {
            prodID: "",
            prodName: "",
            quantity: "",
            amount: "",
            category: "",
            prodDesc: "",
            prodUrl: "",
        },
      },
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.model.product);
      this.$router.push("/admin");
      setTimeout(() => {
        console.log("Reload");
        location.reload()
      }, 50000);
    },
  },
};
</script>

<style scoped>

.button{
  float: right;
}

.yellow-bg {
  background: #f7bf3e;
}

.input-bg {
  background: #faf9e8;
}

.heading-font {
  font-family: "Lalezar", cursive;
}

.text-font {
  font-family: "Londrina Solid", cursive;
}

.add-btn,
.clr-btn {
  border: 3px dashed #ee4823;
  background: #faf9e8;
}

.add-btn:hover,
.clr-btn:hover {
  border: 3px solid #faf9e8;
  background: #ee4823;
  color: #faf9e8;
}

</style>