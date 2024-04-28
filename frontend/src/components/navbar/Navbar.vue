<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Navbar',
  setup() {
    const router = useRouter()

    const navigateToHome = () => {
      router.push('/')
    }

    const navigateToAbout = () => {
      router.push('/about')
    }

    return {
      navigateToHome,
      navigateToAbout
    }
  }
}
</script>

<template>
  <nav>
    <div class="logo">
      <h3 @click="navigateToHome">EARTHEXPLORE</h3>
    </div>
    <div class="nav-links">
      <a href="#" @click.prevent="navigateToHome">Home</a>
      <a href="#" @click.prevent="navigateToAbout">About</a>
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