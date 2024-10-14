<template>
  <div id="app">
    <ItemList :products="products" :isVisible="isVisible" />
    <button @click="toggleVisibility">Toggle Visibility</button>
  </div>
</template>

<script>
import ItemList from './components/ItemList.vue'

export default {
  name: 'App',
  components: {
    ItemList
  },
  data() {
    return {
      isVisible: true,
      products: [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 },
        { id: 3, name: 'Product C', price: 200 }
      ]
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f1cbcb;
  padding: 20px;
}

button {
  background-color: #007bff;
  color: rgb(237, 196, 196);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
