<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav
      class="navbar navbar-expand-lg navbar-light navbar-store fixed-top navbar-fixed-top"
      data-aos="fade-down"
    >
      <div class="container">
        <a href="/" class="navbar-brand">
          <img src="/images/logo.svg" alt="Logo" />
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
            <li class="nav-item active">
              <a href="/index.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="/categories.html" class="nav-link">Categories</a>
            </li>
            <li class="nav-item">
              <a href="/rewards.html" class="nav-link">Rewards</a>
            </li>
            <li class="nav-item active">
              <a href="/register.html" class="nav-link">Register</a>
            </li>
            <li class="nav-item active">
              <a
                href="/login.html"
                class="btn btn-success nav-link px-4 text-white"
                >Sign In</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

<!-- Page Content -->
    <div class="page-content page-home">
      <section class="store-carousel">
        <div class="container">
          <div class="row">
            <div class="col-lg-8" data-aos="zoom-in">
              <div
                id="storeCarousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    class="active"
                    data-target="#storeCarousel"
                    data-slide-to="0"
                  ></li>
                  <li
                    class=""
                    data-target="#storeCarousel"
                    data-slide-to="1"
                  ></li>
                  <li
                    class=""
                    data-target="#storeCarousel"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="/images/carousel-0.jpg"
                      alt=""
                      class="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="/images/carousel-1.jpg"
                      alt=""
                      class="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="/images/carousel-2.jpg"
                      alt=""
                      class="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-none d-sm-block" data-aos="zoom-in">
              <div
                id="storeCarousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    class="active"
                    data-target="#storeCarousel"
                    data-slide-to="0"
                  ></li>
                  <li
                    class=""
                    data-target="#storeCarousel"
                    data-slide-to="1"
                  ></li>
                  <li
                    class=""
                    data-target="#storeCarousel"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="/images/carousel-0.jpg"
                      alt=""
                      class="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="/images/carousel-1.jpg"
                      alt=""
                      class="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="/images/carousel-2.jpg"
                      alt=""
                      class="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                </div>
              </div>
              <div
                id="storeCarousel"
                class="carousel slide mt-2"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    class="active"
                    data-target="#storeCarousel"
                    data-slide-to="0"
                  ></li>
                  <li
                    class=""
                    data-target="#storeCarousel"
                    data-slide-to="1"
                  ></li>
                  <li
                    class=""
                    data-target="#storeCarousel"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="/images/carousel-0.jpg"
                      alt=""
                      class="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="/images/carousel-1.jpg"
                      alt=""
                      class="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="/images/carousel-2.jpg"
                      alt=""
                      class="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="store-trend-categories">
        <div class="container">
          <div class="row">
            <div class="col-12" data-aos="fade-up">
              <h5>Trend Categories</h5>
            </div>
          </div>
          <div class="row">
            <div
              class="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a href="#" class="component-categories d-block">
                <div class="categories-image">
                  <img src="/images/icon/gadget.svg" alt="" class="w-100" />
                </div>
                <p class="categories-text">
                  Gadgets
                </p>
              </a>
            </div>
            <div
              class="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a href="#" class="component-categories d-block">
                <div class="categories-image">
                  <img src="/images/icon/furniture.svg" alt="" class="w-100" />
                </div>
                <p class="categories-text">
                  Furniture
                </p>
              </a>
            </div>
            <div
              class="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a href="#" class="component-categories d-block">
                <div class="categories-image">
                  <img src="/images/icon/makeup.svg" alt="" class="w-100" />
                </div>
                <p class="categories-text">
                  Makeup
                </p>
              </a>
            </div>
            <div
              class="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a href="#" class="component-categories d-block">
                <div class="categories-image">
                  <img src="/images/icon/sneaker.svg" alt="" class="w-100" />
                </div>
                <p class="categories-text">
                  Sneaker
                </p>
              </a>
            </div>
            <div
              class="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a href="#" class="component-categories d-block">
                <div class="categories-image">
                  <img src="/images/icon/tools.svg" alt="" class="w-100" />
                </div>
                <p class="categories-text">
                  Tools
                </p>
              </a>
            </div>
            <div
              class="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a href="#" class="component-categories d-block">
                <div class="categories-image">
                  <img src="/images/icon/baby.svg" alt="" class="w-100" />
                </div>
                <p class="categories-text">
                  Baby
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="store-new-products">
        <div class="container">
          <div class="row">
            <div class="col-12" data-aos="fade-up">
              <h5>New Products</h5>
            </div>
          </div>
          <div class="row">
            <div
              class="col-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a href="/details.html" class="component-products d-block">
                <div class="products-thumbnail">
                  <div
                    class="products-image"
                    style="background-image: url('/images/product/karet.jpg');"
                  ></div>
                </div>
                <div class="products-text">
                  Kebun Karet
                </div>
                <div class="products-price">
                  Rp.100000
                </div>
              </a>
            </div>
            <div
              class="col-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a href="/details.html" class="component-products d-block">
                <div class="products-thumbnail">
                  <div
                    class="products-image"
                    style="background-image: url('/images/product/kelapa.jpg');"
                  ></div>
                </div>
                <div class="products-text">
                  Kebun Kelapa
                </div>
                <div class="products-price">
                  Rp.100000
                </div>
              </a>
            </div>
            <div
              class="col-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a href="/details.html" class="component-products d-block">
                <div class="products-thumbnail">
                  <div
                    class="products-image"
                    style="background-image: url('/images/product/kopi.jpg');"
                  ></div>
                </div>
                <div class="products-text">
                  Kebun Kopi
                </div>
                <div class="products-price">
                  Rp.100000
                </div>
              </a>
            </div>
            <div
              class="col-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a href="/details.html" class="component-products d-block">
                <div class="products-thumbnail">
                  <div
                    class="products-image"
                    style="background-image: url('/images/product/palm_1.jpg');"
                  ></div>
                </div>
                <div class="products-text">
                  Kebun Kelapa Sawit
                </div>
                <div class="products-price">
                  Rp.100000
                </div>
              </a>
            </div>
            <div
              class="col-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a href="/details.html" class="component-products d-block">
                <div class="products-thumbnail">
                  <div
                    class="products-image"
                    style="background-image: url('/images/product/susu.jpg');"
                  ></div>
                </div>
                <div class="products-text">
                  Susu Sapi
                </div>
                <div class="products-price">
                  Rp.100000
                </div>
              </a>
            </div>
            <div
              class="col-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a href="/details.html" class="component-products d-block">
                <div class="products-thumbnail">
                  <div
                    class="products-image"
                    style="background-image: url('/images/product/tea_1.jpg');"
                  ></div>
                </div>
                <div class="products-text">
                  Kebun Teh
                </div>
                <div class="products-price">
                  Rp.100000
                </div>
              </a>
            </div>
            <div
              class="col-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <a href="/details.html" class="component-products d-block">
                <div class="products-thumbnail">
                  <div
                    class="products-image"
                    style="background-image: url('/images/product/tebu_1.jpg');"
                  ></div>
                </div>
                <div class="products-text">
                  Kebun Tebu
                </div>
                <div class="products-price">
                  Rp.100000
                </div>
              </a>
            </div>
            <div
              class="col-6 col-md-4 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a href="/details.html" class="component-products d-block">
                <div class="products-thumbnail">
                  <div
                    class="products-image"
                    style="
                      background-image: url('/images/product/tembakau_1.jpg');
                    "
                  ></div>
                </div>
                <div class="products-text">
                  Kebun Tembakau
                </div>
                <div class="products-price">
                  Rp.100000
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p class="pt-4 pb-2">
              2020 Copyright Store All Right Reserved Iqbal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
};
</script>
