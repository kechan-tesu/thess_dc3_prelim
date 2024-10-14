<template>
  <div class="item" v-if="isVisible">
    <h3>{{ item.name }}</h3>
    <p>Price: {{ item.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: Object,
    isVisible: Boolean
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.item)
    }
  }
}
</script>

<style scoped>
.item {
  text-align: center;
  border: 1px solid #95e98c;
  border-radius: 8px;
  padding: 15px;
  background-color: #9bb4cb;
}

.item h3 {
  color: #333;
}

.item p {
  font-size: 18px;
  font-weight: bold;
}

.item button {
  background-color: #28a745;
  color: rgb(219, 183, 183);
  border: none;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
}

.item button:hover {
  background-color: #218838;
}
</style>
