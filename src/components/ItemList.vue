<template>
  <div class="item-list">
    <h2>Item List</h2>
    <div class="items-container">
      <Item
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'ItemList',
  components: {
    Item
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleAddToCart(product) {
      console.log(`Adding product to cart: ${product.name}`)
      console.log('Product Details:', product)
    }
  }
}
</script>

<style>
.product-list {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-list h2 {
  margin-top: 0;
  font-weight: bold;
  color: #333;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
