<template>
  <div id="app">
    <ProductList />
  </div>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">VUE SPA</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
// import ProductForm from './components/ProductForm.vue';
// import db from './db.json'

export default {
  components: {
    ProductList
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  text-align: center;
  color: #4a2c34;
  margin-top: 60px;
  background-color: #f9f3f6;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #d78d99;
  font-size: 2.5em;
}

p {
  font-size: 1.2em;
}

a {
  color: #d78d99;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #b76a7a;
}
</style>
