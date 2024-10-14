<template>
  <div class="item-list">
    <div v-for="item in filteredItems" :key="item.id">
      <Item :item="item" :isVisible="isVisible" @add-to-cart="handleAddToCart" />
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
    products: Array,
    isVisible: Boolean
  },
  computed: {
    filteredItems() {
      return this.isVisible ? this.products : []
    }
  },
  methods: {
    handleAddToCart(item) {
      console.log(`Added to cart: ${item.name}, Price: ${item.price}`)
    }
  }
}
</script>

<style>
.item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.item-list > div {
  border: 1px solid #3e3b3b;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  background-color: rgb(252, 207, 207);
}
</style>
