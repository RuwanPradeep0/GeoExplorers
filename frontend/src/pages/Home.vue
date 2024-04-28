<script >
  // importing all the components which are need to implement Home page
import Navbar from '../components/navbar/Navbar.vue'
import HeroSection from '../components/heroSection/HeroSection.vue'
import SectionCards from '../components/sectionCards/SectionCards.vue'
import Footer from '../components/footer/Footer.vue'


//This is the codepart exporting the created Homepage , and also you should export all the imported packages and images with it as a package
export default {
    name: 'Home',
    components: {
      Navbar,
      HeroSection,
      SectionCards,
      Footer
    },
  }

</script>

<!-- arranging imporded components to build the home page -->

<template>
    <Navbar/>
    <HeroSection/>
    <SectionCards/>
    <Footer/>
    
</template>