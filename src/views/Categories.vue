<template>
  <div class="categories">
    <Navbar />
    <div class="page-content page-home">
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
import Footer from "@/components/Footer.vue";

export default {
  name: "Categories",
  components: {
    Navbar,
    TrendCategory,
    NewProduct,
    Footer,
  },
};
</script>
