<template>
  <div class="shopping-cart">
    <Navbar />
    <!-- Content Cart -->
    <div class="page-content page-cart">
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
                  <li class="breadcrumb-item active">Cart</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="store-cart">
        <div class="container">
          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-12 table-responsive">
              <table class="table table-borderless table-cart text-left">
                <thead>
                  <tr>
                    <td>Image</td>
                    <td>Name &amp; Seller</td>
                    <td>Price</td>
                    <td>Menu</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="width: 25%">
                      <img
                        src="/images/product/product_detail_1.jpg"
                        class="cart-image w-100"
                        alt=""
                      />
                    </td>
                    <td style="width: 35%">
                      <div class="product-title">Kopi</div>
                      <div class="product-subtitle">
                        By Muhammad Iqbal Aulia Rafi
                      </div>
                    </td>
                    <td style="width: 35%">
                      <div class="product-title">100.000</div>
                      <div class="product-subtitle">Rupiah</div>
                    </td>
                    <td style="width: 20%">
                      <a href="#" class="btn btn-remove-cart"> Hapus </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row" data-aos="fade-up" data-aos-delay="150">
            <div class="col-12">
              <hr />
            </div>
            <div class="col-12 text-left">
              <h2 class="mb-4">Data Pembeli</h2>
            </div>
          </div>
          <div
            class="row mb-2 text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="col-md-6">
              <div class="form-group">
                <label for="addressOne">Alamat 1</label>
                <input
                  type="text"
                  class="form-control"
                  id="addressOne"
                  name="addressOne"
                  placeholder="Alamat"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="addressTwo">Alamat 2</label>
                <input
                  type="text"
                  class="form-control"
                  id="addressTwo"
                  name="addressTwo"
                  placeholder="Alamat 2"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="province">Provinsi</label>
                <select name="province" id="province" class="form-control">
                  <option value="Jawa Barat">Jawa Barat</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="city">Kota</label>
                <select name="city" id="city" class="form-control">
                  <option value="Jakarta">Jakarta</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="addressTwo">Kode Pos</label>
                <input
                  type="text"
                  class="form-control"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Kode Pos"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="country">Negara</label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
                  name="country"
                  placeholder="Negara"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="mobile">Nomer Hp</label>
                <input
                  type="text"
                  class="form-control"
                  id="mobile"
                  name="mobile"
                  placeholder="Nomer Hp"
                />
              </div>
            </div>
          </div>
          <div class="row" data-aos="fade-up" data-aos-delay="150">
            <div class="col-12">
              <hr />
            </div>
            <div class="col-12 text-left">
              <h2 class="mb-2">Informasi Pembayaran</h2>
            </div>
          </div>
          <div class="row" data-aos="fade-up" data-aos-delay="200">
            <div class="col-4 col-md-2">
              <div class="product-title">100.000</div>
              <div class="product-subtile">Pajak Negara</div>
            </div>
            <div class="col-4 col-md-3">
              <div class="product-title">100.000</div>
              <div class="product-subtile">Pajak Asuransi</div>
            </div>
            <div class="col-4 col-md-2">
              <div class="product-title">100.000</div>
              <div class="product-subtile">Pengiriman ke Jakarta</div>
            </div>
            <div class="col-4 col-md-2">
              <div class="product-title text-success">400.000</div>
              <div class="product-subtile">Total</div>
            </div>
            <div class="col-8 col-md-3">
              <a
                href="/success.html"
                class="btn btn-success mt-4 px-4 btn-block"
              >
                Pembayaran
              </a>
            </div>
          </div>
        </div>
      </section>
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
  name: "ShoppingCart",
  components: {
    Navbar,

    Footer,
  },
};
</script>

<style scoped>
.store-cart h2 {
  font-size: 16px;
  color: #0c0d36;
  margin-top: 18px;
  font-weight: 600;
}

.store-cart .product-title {
  font-size: 18px;
  color: #0c0d36;
  margin-top: 15px;
}

.store-cart .product-subtitle {
  font-size: 14px;
  color: #979797;
}

.store-cart .table-cart {
  margin-left: -15px;
  margin-right: -15px;
}

.store-cart .table-cart th {
  font-weight: 200;
}

.store-cart .table-cart .cart-image {
  border-radius: 8px;
  max-height: 100px;
}

.store-cart .table-cart .btn-remove-cart {
  margin-top: 18px;
  background-color: #fc5e84;
  color: #ffffff;
}

.store-cart .table-cart .btn-remove-cart:hover {
  margin-top: 18px;
  background-color: #fc5e81;
  color: #ffffff;
}
</style>
