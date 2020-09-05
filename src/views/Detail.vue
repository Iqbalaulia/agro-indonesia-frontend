<template>
  <div class="detail">
    <Navbar />
    <!-- Content -->
    <div class="page-content page-details">
      <section
        class="store-breadcrumbs"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Product Details</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="store-gallery" id="gallery">
        <div class="container">
          <div class="row">
            <div class="col-lg-8" data-aos="zoom-in">
              <transition name="slide-fade" mode="out-in">
                <img
                  :src="photos[activePhoto].url"
                  :key="photos[activePhoto].id"
                  class="w-100 main-image"
                  alt=""
                />
              </transition>
            </div>
            <div class="col-lg-2">
              <div class="row">
                <div
                  class="col-3 col-lg-12 mt-2 mt-lg-0"
                  v-for="(photo, index) in photos"
                  :key="photo.id"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <a href="#" @click="changeActive(index)">
                    <img
                      :src="photo.url"
                      class="w-100 thumbnail-image"
                      :class="{ active: index == activePhoto }"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="store-details-container" data-aos="fade-up">
        <section class="store-heading">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 text-left">
                <h1>Hasil Perkebunan Kopi</h1>
                <div class="owner">By. Muhammad Iqbal Aulia Rafi'</div>
                <div class="price">Rp. 100.000 / kg</div>
              </div>
              <div class="col-lg-2" data-aos="zoom-in">
                <a
                  href="/cart.html"
                  class="btn btn-success px-4 text-white btn-block mb-3"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="store-description">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-8 text-left">
                <p>
                  The Nike Air Max 720 SE goes bigger than ever before with
                  Nike's tallest Air unit yet for unimaginable, all-day comfort.
                  There's super breathable fabrics on the upper, while colours
                  add a modern edge.
                </p>
                <p>
                  Bring the past into the future with the Nike Air Max 2090, a
                  bold look inspired by the DNA of the iconic Air Max 90.
                  Brand-new Nike Air cushioning underfoot adds unparalleled
                  comfort while transparent mesh and vibrantly coloured details
                  on the upper are blended with timeless OG features for an
                  edgy, modernised look.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="store-review">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-8 mt-3 mb-3 text-left">
                <h5>Customer Review (3)</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-8">
                <ul class="list-unstyled text-left">
                  <li class="media">
                    <img
                      src="/images/icon/icon-testimonial-1.png"
                      alt=""
                      class="mr-3 rounded-circle"
                    />
                    <div class="media-body">
                      <h5 class="mt-2 mb-1">Hazza Risky</h5>
                      I thought it was not good for living room. I really happy
                      to decided buy this product last week now feels like
                      homey.
                    </div>
                  </li>
                  <li class="media">
                    <img
                      src="/images/icon/icon-testimonial-2.png"
                      alt=""
                      class="mr-3 rounded-circle"
                    />
                    <div class="media-body">
                      <h5 class="mt-2 mb-1">Anna Sukkirata</h5>
                      I thought it was not good for living room. I really happy
                      to decided buy this product last week now feels like
                      homey.
                    </div>
                  </li>
                  <li class="media">
                    <img
                      src="/images/icon/icon-testimonial-3.png"
                      alt=""
                      class="mr-3 rounded-circle"
                    />
                    <div class="media-body">
                      <h5 class="mt-2 mb-1">Dakimu Wangi</h5>
                      I thought it was not good for living room. I really happy
                      to decided buy this product last week now feels like
                      homey.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
    <!-- Content -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Detail",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      activePhoto: 0,
      photos: [
        {
          id: 1,
          url: "/images/product/product_detail_1.jpg",
        },
        {
          id: 2,
          url: "/images/product/product_detail_2.jpg",
        },
        {
          id: 3,
          url: "/images/product/product_detail_3.jpg",
        },
        {
          id: 4,
          url: "/images/product/product_detail_4.jpg",
        },
      ],
    };
  },
  methods: {
    changeActive(id) {
      this.activePhoto = id;
    },
  },
};
</script>

<style scoped>
.page-details h5 {
  font-weight: normal;
  font-size: 18px;
  color: #0c0d36;
}

.page-details .store-gallery {
  margin-top: 20px;
}

.page-details .store-gallery img {
  border-radius: 10px;
}

.page-details .store-gallery .thumbnail-image {
  margin-bottom: 20px;
  border: 2px solid transparent;
}

.page-details .store-gallery .thumbnail-image:hover {
  border: 2px solid #ff7158;
}

.page-details .store-gallery .thumbnail-image.active {
  border: 2px solid #ff7158;
}

.page-details .store-heading {
  margin-bottom: 10px;
}

.page-details .store-heading h1 {
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: #0c0d36;
  margin-bottom: 0px;
}

.page-details .store-heading .owner {
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #979797;
  margin-bottom: 8px;
}

.page-details .store-heading .price {
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  color: #ff7158;
  margin-bottom: 10px;
}

.page-details .store-description {
  font-weight: normal;
  font-size: 16px;
  line-height: 180%;
  color: #525252;
}

.page-details .store-review .media img {
  max-width: 50px;
}

.page-details .store-review .media-body {
  font-weight: normal;
  font-size: 16px;
  line-height: 180%;
  color: #525252;
  margin-bottom: 20px;
}

.page-details .store-review .media-body h5 {
  font-weight: 500;
  font-size: 16px;
  color: #0c0d36;
}
</style>
