<template>
  <div>
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
            <router-link to="/detail" class="component-products d-block">
              <div class="products-thumbnail">
                <div
                  class="products-image"
                  style="background-image: url('/images/product/karet.jpg')"
                ></div>
              </div>
              <div class="products-text">Kebun Karet</div>
              <div class="products-price">Rp.100000</div>
            </router-link>
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
                  style="background-image: url('/images/product/kelapa.jpg')"
                ></div>
              </div>
              <div class="products-text">Kebun Kelapa</div>
              <div class="products-price">Rp.100000</div>
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
                  style="background-image: url('/images/product/kopi.jpg')"
                ></div>
              </div>
              <div class="products-text">Kebun Kopi</div>
              <div class="products-price">Rp.100000</div>
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
                  style="background-image: url('/images/product/palm_1.jpg')"
                ></div>
              </div>
              <div class="products-text">Kebun Kelapa Sawit</div>
              <div class="products-price">Rp.100000</div>
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
                  style="background-image: url('/images/product/susu.jpg')"
                ></div>
              </div>
              <div class="products-text">Susu Sapi</div>
              <div class="products-price">Rp.100000</div>
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
                  style="background-image: url('/images/product/tea_1.jpg')"
                ></div>
              </div>
              <div class="products-text">Kebun Teh</div>
              <div class="products-price">Rp.100000</div>
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
                  style="background-image: url('/images/product/tebu_1.jpg')"
                ></div>
              </div>
              <div class="products-text">Kebun Tebu</div>
              <div class="products-price">Rp.100000</div>
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
              <div class="products-text">Kebun Tembakau</div>
              <div class="products-price">Rp.100000</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "NewProduct",
};
</script>
