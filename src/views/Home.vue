<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <!-- Page Content -->
    <div class="page-content page-home">
      <Carousel />
      <TrendCategory />
      <NewProduct />
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import TrendCategory from "@/components/TrendCategory.vue";
import NewProduct from "@/components/NewProduct.vue";
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Navbar,
    TrendCategory,
    NewProduct,
    Carousel,
    Footer,
  },
};
</script>
