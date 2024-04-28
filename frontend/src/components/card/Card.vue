<script>

import { useRouter } from 'vue-router'

export default {
  name: 'Card',
  //Here ussing props - just like function arguments , to render a same components many times from a another component 

  props: {
    title: String,
    description: String,
    buttonText: String,
    imageSrc: String,
    postRoute: String
  },

  setup(props) {
    const router = useRouter() // Initialize the router

    // Function to navigate to the post route(appropriate post page)
    const navigateToPost = () => {
      router.push(props.postRoute)
    }

    return { navigateToPost }
  }
}
</script>


<template>
  <div class="card">
    <div class="card-image">
      <img :src="imageSrc" :alt="title">
    </div>
    <div class="card-content">
      <h3>{{ title }}</h3>  
      <!-- as theses are props we use {{title }} inside of the tags -->

      <p>{{ description }}</p>
      <button class="card-button" @click="navigateToPost">{{ buttonText }}</button>
    </div>
  </div>
</template>



<style scoped>
/* importing styles from styles file  this is a god programming practise also*/

@import './card.vue.css';  

</style>