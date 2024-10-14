<template>
  <div class="product-list">
    <h1>Product List</h1>
    <ProductForm @product-added="handleProductAdded" />
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <span v-if="!product.isEditing">{{ product.text }}</span>
        <input
          v-if="product.isEditing"
          v-model="product.text"
          @keyup.enter="finishEditing(index)"
          @blur="finishEditing(index)"
        />
        <button @click="editProduct(index)" v-if="!product.isEditing">Edit</button>
        <button @click="finishEditing(index)" v-if="product.isEditing">Save</button>
        <button @click="removeProduct(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductForm from './ProductForm.vue'
// import ProductForm from './ProductForm.vue'

export default {
  components: {
    ProductForm
    // ProductForm
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    handleProductAdded(newProduct) {
      this.products.push({ text: newProduct, isEditing: false })
    },
    editProduct(index) {
      this.products[index].isEditing = true
    },
    finishEditing(index) {
      this.products[index].isEditing = false
    },
    removeProduct(index) {
      this.products.splice(index, 1)
    }
  }
}
</script>

<style>
.todo-list {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f9f3f6;
  border: 2px solid #f1c0d8;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #d78d99;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #f1c0d8;
}

span {
  font-size: 18px;
  color: #4a2c34;
}

input {
  border: 1px solid #d78d99;
  border-radius: 5px;
  padding: 5px;
  margin-left: 10px;
}

button {
  cursor: pointer;
  background-color: #d78d99;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #b76a7a;
}
</style>
