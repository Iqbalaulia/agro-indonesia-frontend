<template>
  <div>
    <section class="store-carousel">
      <div class="container">
        <div class="row">
          <div class="col-lg-12" data-aos="zoom-in">
            <div id="storeCarousel" class="carousel slide" data-ride="carousel">
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
                    class="d-block w-100"
                    alt="Carousel Image"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/images/carousel-1.jpg"
                    class="d-block w-100"
                    alt="Carousel Image"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/images/carousel-2.jpg"
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
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>
