<template>
  <div class="p-3 col-7">
    <form action="https://puzzles-deli.onrender.com/product" method="POST" class="card p-3 yellow-bg">
      <h1 class="text-center heading-font">Add Product:</h1>

      <div class="mb-3 text-font">
        <label for="prodID" class="form-label">Product ID: *</label>
        <input 
        v-model="prodID"
        type="text"
        id="prodID"
        name="prodID"
        class="form-control input-bg"
        placeholder="eg: CHM001"
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
        placeholder="eg: Chicken Mayo"
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
        placeholder="eg: Chicken"
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
        placeholder="Insert PostImages Link Here!"
        required
        />
      </div>

      <p class="text-font">* indicates a required field.</p>

      <div class="p-3 text-center">
        <button type="submit" class="btn m-2 add-btn text-font">Add Product!</button>
        <button type="reset" class="btn m-2 clr-btn  text-font">Clear Fields</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prodID: "",
      prodName: "",
      quantity: "",
      amount: "",
      category: "",
      prodUrl: ""
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lalezar&family=Londrina+Solid&display=swap');
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