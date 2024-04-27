<script>
  import Card from '../card/Card.vue'
  import image01 from '../../assets/hero-bg.jpg'
  import image02 from '../../assets/hero-bg2.jpg'
  import image03 from '../../assets/hero-bg3.jpg'
 
  
  export default {
  name: 'SectionCards',
  components: {
    Card
  },
  data() {
    return {
      image01,
      image02,
      image03
      
    }
  }
}
  </script>


<template>
    <section class="section-cards">
      <div class="section-intro">
        <h2>Lets Serve the Environment Together</h2>
        <p>random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
      </div>
      <div class="card-container">

        <!-- sending props to the card component -->
        <!-- used 5 card component to represent 5 artiles -->

        <Card
          title="sample_1"
          description="Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum."
          buttonText="Read More"
          :imageSrc="image01"
        />
        <Card
          title="sample_2"
          description="Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum."
          buttonText="Read More"
          :imageSrc="image02"
        />
        <Card
          title="sample_3"
          description="Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum"
          buttonText="Read More"
          :imageSrc="image03"
        />

        <Card
          title="sample_4"
          description="Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum."
          buttonText="Read More"
          :imageSrc="image01"
        />

        <Card
          title="sample_5"
          description="Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum."
          buttonText="Read More"
          :imageSrc="image02"
        />
      </div>
    </section>
  </template>
  
  
  
  <style scoped>
  @import './sectionCards.vue.css';
  </style>