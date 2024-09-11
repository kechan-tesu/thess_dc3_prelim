<template>
  <div class="container">
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'

export default {
  name: 'App1',
  components: {
    ProductList
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Coke', price: 10.99 },
        { id: 2, name: 'Sprite', price: 9.99 },
        { id: 3, name: 'Royal', price: 12.99 }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-family: 'Arial', sans-serif;
}

.container h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
}

.container p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin: 10px 0;
}

.container button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  text-align: center;
  text-decoration: none;
}

.container button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.container button:active {
  background-color: #004494;
  transform: translateY(0);
}

/* Additional styles for better layout */
.container .product-list {
  margin-top: 20px;
}
</style>
