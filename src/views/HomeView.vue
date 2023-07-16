<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- begin:header  -->
  <nav class="navbar bg-first mb-3">
    <div class="container-fluid">
      <a class="navbar-brand text-white fs-4" href="#"
        >Wellcome in <span class="fw-bold"> Acafe</span></a
      >
      <div class="dropdown">
        <div class="p-2 bg-first-alt rounded" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="#fff"
              d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45012 21.6603 6.00241C21.6603 6.09973 21.6461 6.19653 21.6182 6.28975L19.2182 14.2898C19.0913 14.7127 18.7019 15.0024 18.2603 15.0024H6.00436V17.0024H17.0044V19.0024H5.00436C4.45207 19.0024 4.00436 18.5547 4.00436 18.0024V6.41662ZM6.00436 7.00241V13.0024H17.5163L19.3163 7.00241H6.00436ZM5.50436 23.0024C4.67593 23.0024 4.00436 22.3308 4.00436 21.5024C4.00436 20.674 4.67593 20.0024 5.50436 20.0024C6.33279 20.0024 7.00436 20.674 7.00436 21.5024C7.00436 22.3308 6.33279 23.0024 5.50436 23.0024ZM17.5044 23.0024C16.6759 23.0024 16.0044 22.3308 16.0044 21.5024C16.0044 20.674 16.6759 20.0024 17.5044 20.0024C18.3328 20.0024 19.0044 20.674 19.0044 21.5024C19.0044 22.3308 18.3328 23.0024 17.5044 23.0024Z"
            ></path>
          </svg>
        </div>
        <ul class="dropdown-menu dropdown-menu-end mt-3" style="width: 350px">
          <h6 class="ms-3">Keranjang</h6>
          <li><hr class="dropdown-divider" /></li>
          <div class="px-3 text-center">
            <span class="text-danger">keranjang masih kosong</span>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <!-- end:header  -->
  <!-- begin:search -->
  <section class="section container">
    <h5 class="text-white mb-3">Minuman Dingin</h5>
    <div class="search d-flex">
      <input
        type="search"
        class="form-control border-0 rounded-0 rounded-start"
        placeholder="Search"
      />
      <div class="icon bg-first-alt px-3 d-flex align-items-center rounded-end">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="#fff"
            d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
          ></path>
        </svg>
      </div>
    </div>
  </section>
  <!-- end:search -->
  <!-- begin:content -->
  <section class="section container mt-5">
    <div class="row">
      <div class="col-3 position-relativer" style="height: 500px">
        <div
          class="position-absolute d-flex align-items-center gap-4 fw-semibold"
          style="transform: rotate(-90deg); top: 400px; left: -138px"
        >
          <RouterLink
            to="/makanan-berat"
            exact-active-class="active"
            class="text-decoration-none text-white text-center"
            >Makanan<br />Berat</RouterLink
          >
          <RouterLink
            to="/makanan-ringan"
            exact-active-class="active"
            class="text-decoration-none text-white text-center"
            >Makanan<br />Ringan</RouterLink
          >
          <RouterLink
            to="/minuman-panas"
            exact-active-class="active"
            class="text-decoration-none text-white text-center"
            >Minuman<br />Panas</RouterLink
          >
          <RouterLink
            to="/"
            exact-active-class="active"
            class="text-decoration-none text-white text-center"
            >Minuman<br />Dingin</RouterLink
          >
        </div>
      </div>
      <div class="col-9 border-start">
        <RouterView />
      </div>
    </div>
  </section>
  <!-- end:content -->
</template>
<style scoped>
.active {
  padding: 0.5rem 1rem;
  background-color: var(--first-color-alt);
  border-radius: 0.5rem;
  display: block;
}
</style>
