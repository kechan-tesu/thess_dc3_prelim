<template>
  <div id="app">
    <header>
      <h1>Welcome to My Homepage</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>Thess Stephanie G. Busalanan</p>
        <p>BSIT</p>
        <p>3rd Year College</p>
      </section>
      <!-- <section id="services">
          <h2>Our Services</h2>
          <p>We offer a variety of services to help you succeed.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Feel free to reach out for more information.</p> -->
      <!-- </section> -->
    </main>

    <!-- <footer>
        <p>&copy; 2024 My Homepage. All rights reserved.</p>
      </footer> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #f8f9fa;
  padding: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin: 0 15px;
}

main {
  padding: 20px;
  text-align: left;
}

section {
  margin-bottom: 20px;
}

footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
