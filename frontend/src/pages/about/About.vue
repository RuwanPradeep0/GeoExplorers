<script>

import Navbar from '../../components/navbar/Navbar.vue'

export default {
  name: 'AboutPage',

  components: {
      Navbar,
    },
}
</script>



<template>
  <Navbar/>
  <div class="about-page">
    <div class="about-header">
      <h1 class="about-title">About Us</h1>
    </div>

    <div class="about-content">

      <h2>The Open University of Sri Lanka</h2>
      <ul>
        <li>Faculty of Engineering technology </li>
        <li>Bse Software Engineering </li>
        <li>EEX3346</li>
        <li>Web Application Development </li>
        <li>Mini Project </li>
        <li>SID S22009992</li>
        <li>emailID s22009992@ousl.lk</li>
      </ul>


      
    </div>
  </div>
</template>



<style scoped>

@import './about.vue.css';

</style>