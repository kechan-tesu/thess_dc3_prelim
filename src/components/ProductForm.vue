<template>
  <form @submit.prevent="addProduct">
    <input v-model="newProduct" placeholder="Add a new product" required />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.$emit('todo-added', this.newTodo.trim())
        this.newTodo = ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  border: 2px solid #d78d99;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: 70%;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #b76a7a;
  outline: none;
}

button {
  cursor: pointer;
  background-color: #d78d99;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #b76a7a;
}
</style>
