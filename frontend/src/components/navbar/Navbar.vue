<script>
export default {
  name: 'Navbar'
}
</script>

<template>
    <nav>
      <div class="logo">
        <img src="./assets/logo.png" alt="Logo">
      </div>
      <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Articles</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </template>
  



  
  <style scoped>
  @import './navbar.vue.css';
 
  </style>