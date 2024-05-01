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
        <p>Global warming and environmental pollution are the most challenging and biggest problems facing mankind in the 21st century. We proudly created this website as a mini project of Course Code EEI3346 Web Development technology the Open University of Sri Lanka, to aware people knowledge and educate them about environmental pollution and global warming. 

Vision and Mission of this webpage are to educate and provide proper knowledge the people of Kilinochchi district about the regional environmental protection, threads and plundering natural resources of Kilinochchi district. 
</p>
      </div>
      <div class="card-container">

        <!-- sending props to the card component -->
        <!-- used 5 card component to represent 5 artiles -->

        <Card
          title="Environment threads of Kilinochchi District"
          description="The main economy of Kilinochchi district is dependent on agriculture. As a result, the livelihood lifestyle culture of the people of the region d"
          buttonText="Read More"
          :imageSrc="image01"
          :postRoute="'/post01'"
        />
        <Card
          title="The Hidden Currents: Unveiling the Effects of Illegal River Sand Mining"
          description="In the tranquil flow of rivers lies a hidden battle – a battle not against nature's currents, but against human greed. Illegal river sand mining, a modern-day scourge, "
          buttonText="Read More"
          :imageSrc="image02"
          :postRoute="'/post02'"
        />
        <Card
          title="The effects of deforestation revealed "
          description="In the heart of a lush forest, where the treetops reach the sky and the air is full of life, a silent tragedy unfolds every time a tree falls. Relentless deforestation, driven by diverse human needs and desires"
          buttonText="Read More"
          :imageSrc="image03"
          :postRoute="'/post03'"
        />

        <Card
          title="Protect our natural resources "
          description="Illegal sand mining and deforestation pose serious threats to our environment, ecosystems and communities, but despite regulatory frameworks and efforts to curb these activities"
          buttonText="Read More"
          :imageSrc="image01"
          :postRoute="'/post04'"
        />

       
      </div>
    </section>
  </template>
  
  
  
  <style scoped>
  @import './sectionCards.vue.css';
  </style>