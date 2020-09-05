<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light navbar-store fixed-top navbar-fixed-top"
      data-aos="fade-down"
    >
      <div class="container">
        <a href="/" class="navbar-brand">
          <img src="/images/Agronesia.svg" alt="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li
              :class="[
                currentPage.includes('home') ? activeClass : '',
                'nav-item',
              ]"
            >
              <router-link to="/" class="nav-link"> Home </router-link>
            </li>
            <li
              :class="[
                currentPage.includes('category') ? activeClass : '',
                'nav-item',
              ]"
            >
              <router-link to="/category" class="nav-link">
                Categories
              </router-link>
            </li>
            <li class="nav-item">
              <a href="/rewards.html" class="nav-link">Rewards</a>
            </li>
            <li class="nav-item">
              <a href="/register.html" class="nav-link">Register</a>
            </li>
            <li
              :class="[
                currentPage.includes('/') ? activeClass : '',
                'nav-item',
              ]"
            >
              <router-link
                to="/login"
                class="btn btn-success nav-link px-4 text-white text-center"
                >Sign In</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
  data() {
    return {
      activeClass: "active",
    };
  },
};
</script>
