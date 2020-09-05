<template>
  <div class="login">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <!-- Page Content -->
    <div class="page-content page-auth">
      <div class="section-store-auth" data-aos="fade-up">
        <div class="container">
          <div class="row align-items-center row-login">
            <div class="col-lg-6 text-center">
              <img
                src="/images/login-placeholder.png"
                alt=""
                class="w-50 mb-4 mb-lg-none"
              />
            </div>
            <div class="col-lg-5 text-left">
              <h2>
                Belanja kebutuhan utama, <br />
                menjadi lebih mudah!
              </h2>
              <form action="" class="mt-3">
                <div class="form-group">
                  <label for="">Email Address</label>
                  <input type="email" id="email" class="form-control w-75" />
                </div>
                <div class="form-group">
                  <label for="">Password</label>
                  <input
                    type="password"
                    id="password"
                    class="form-control w-75"
                  />
                </div>
                <button class="btn btn-success btn-block w-75 mt-4">
                  Sign In to My Account
                </button>
                <a
                  href="/register.html"
                  class="btn btn-signup btn-block w-75 mt-4"
                >
                  Sign Up
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Content -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "login",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.page-auth .row-login {
  min-height: 70vh;
}
.page-auth .section-store-auth h2 {
  font-weight: 200;
  font-size: 28px;
  margin-top: 0;
  color: #0c0d36;
}

.page-auth .section-store-auth .form-control {
  border-radius: 8px;
  background: #f3f3f3;
}

.page-auth .section-store-auth .btn-signup {
  background-color: #f3f3f3;
  color: #bbb;
}

.page-auth .section-store-auth .btn-signup:hover {
  background-color: #d6e0f0;
  color: #fff;
}
</style>
