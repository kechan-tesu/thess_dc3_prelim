<template>
  <div class="product-item">
    <h3>{{ product.name }}</h3>
    <p class="product-price">Price: P{{ product.price }}</p>
    <button @click="addToCart" :aria-label="`Add ${product.name} to cart`">Add to Cart</button>
    <div class="itemLists-container">
      <ItemList v-if="filteredItems == true">
        <p>You have {{ filteredItems }} item(s) left!</p>
      </ItemList>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  computed: {
    filteredItems(isVisible) {
      return this.product.filter(this.product => !task.completed).length;
    },
  },

  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product)
    }
  }
}
</script>

<style>
.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 1rem;
}

.product-item h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
}

.product-item button {
  background-color: #4caf50;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.product-item button:hover {
  background-color: #3e8e41;
}
</style>
