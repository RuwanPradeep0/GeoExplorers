
<template>
    <div class="post-page">
      <div class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-meta">
          <span class="post-author">By {{ post.author }}</span>
          <span class="post-date">{{ formatDate(post.date) }}</span>
        </div>
      </div>
      <div class="post-featured-image">
        <img :src="post.featuredImage" :alt="post.title">
      </div>
      <div class="post-content">
        <p v-for="paragraph in post.content" :key="paragraph">{{ paragraph }}</p>
      </div>
      <div class="post-additional-images">
        <div v-for="image in post.additionalImages" :key="image" class="post-image">
          <img :src="image" :alt="post.title">
        </div>
      </div>
      <CommentRating />
    </div>
  </template>
  
  <script>
  import CommentRating from './commentRating/CommentRating.vue'
  
  export default {
    name: 'PostPage',
    components: {
      CommentRating
    },
    data() {
      return {
        post: {
          title: 'Post Title',
          author: 'Mars computers',
          date: '2022-04-27',
          featuredImage: 'featured-image.jpg',
          content: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis eu lectus pharetra fringilla. Sed venenatis, libero vel ultrices volutpat, mauris eros faucibus risus, et ultrices augue augue eget nunc.',
            'Donec vel quam vitae metus tristique feugiat. Aenean fermentum dui quis turpis scelerisque, ut finibus magna convallis. Cras ac velit vel ex bibendum sodales. Sed id justo vel tellus egestas tincidunt.',
            'Praesent id nunc eget enim eleifend iaculis. Fusce efficitur, nunc vel lobortis placerat, mauris arcu malesuada mauris, vel ultricies augue ipsum vel eros. Nullam vel enim vel eros facilisis auctor.'
          ],
          additionalImages: [
            'image-1.jpg',
            'image-2.jpg',
            'image-3.jpg'
          ]
        }
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
  
  <style scoped>
  .post-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .post-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .post-title {
    font-size: 32px;
    margin-bottom: 10px;
  }
  
  .post-meta {
    font-size: 14px;
    color: #888;
  }
  
  .post-featured-image {
    margin-bottom: 30px;
  }
  
  .post-featured-image img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .post-content {
    line-height: 1.6;
    margin-bottom: 30px;
  }
  
  .post-additional-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .post-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    .post-additional-images {
      grid-template-columns: 1fr;
    }
  }
  </style>