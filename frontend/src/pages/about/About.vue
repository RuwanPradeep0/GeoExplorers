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
      <div class="about-meta">
        <span>Open University srilanka</span>
        <span>Environmental Conservation Organization</span>
      </div>
    </div>

    <div class="about-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        turpis eu lectus pharetra fringilla. Sed venenatis, libero vel ultrices
        volutpat, mauris eros faucibus risus, et ultrices augue augue eget nunc.
        Donec vel quam vitae metus tristique feugiat.
      </p>
      <p>
        Aenean fermentum dui quis turpis scelerisque, ut finibus magna
        convallis. Cras ac velit vel ex bibendum sodales. Sed id justo vel
        tellus egestas tincidunt. Praesent id nunc eget enim eleifend iaculis.
        Fusce efficitur, nunc vel lobortis placerat, mauris arcu malesuada
        mauris, vel ultricies augue ipsum vel eros.
      </p>

      <h2>Our Mission</h2>
      <p>
        Nullam vel enim vel eros facilisis auctor. Vivamus ultricies, risus id
        tincidunt euismod, augue odio efficitur magna, eget bibendum ante magna
        in nisl. Sed non tellus mauris. Suspendisse potenti.
      </p>

      <h2>Our Values</h2>
      <ul>
        <li>Sustainability</li>
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Collaboration</li>
      </ul>

      <h2>Our History</h2>
      <p>
        Sed venenatis, libero vel ultrices volutpat, mauris eros faucibus risus,
        et ultrices augue augue eget nunc. Donec vel quam vitae metus tristique
        feugiat. Aenean fermentum dui quis turpis scelerisque, ut finibus magna
        convallis.
      </p>
    </div>
  </div>
</template>



<style scoped>

@import './about.vue.css';

</style>