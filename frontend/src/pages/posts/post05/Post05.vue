<script>
  import CommentRating from '../../../components/commentRating/CommentRating.vue'
  import Navbar from '../../../components/navbar/Navbar.vue'
  import postData from './data.js'
  
  export default {
    name: 'post05',
    components: {
      CommentRating,
      Navbar
    },
    data() {
      return {
        post: postData.post
      }
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString)
        return date.toLocaleDateString()
      }
    }
  }
  </script>
  


<template>
     <Navbar/>
    <div class="post-page">
      <div class="post-header">

        <h1 class="post-title">{{ post.title }}</h1>

        <div class="post-meta">
          <span class="post-author">By {{ post.author }}</span>
          <span class="post-date">{{ formatDate(post.date) }}</span>
        </div>

      </div>

      <div class="post-featured-image">
        <img :src="post.featuredImage" :alt="post.title" />
      </div>

      <div class="post-content">
        <p v-for="paragraph in post.content" :key="paragraph">{{ paragraph }}</p>
      </div>

      
      <CommentRating />
    </div>
  </template>
  
  
  <style scoped>
    @import './post05.vue.css';
 
  </style>