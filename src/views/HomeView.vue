<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header py-4">
    <h1 class="text-white">Wellcome!</h1>
  </header>

  <section class="section">
    <h4 class="text-white">Shakes</h4>
    <div class="search d-flex align-items-center gap-1 bg-white px-2 py-1 rounded-2">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="#000"
            d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
          ></path>
        </svg>
      </div>
      <input type="search" class="form-control border-0" placeholder="Search" />
    </div>
  </section>

  <section class="section container mt-5">
    <div class="row">
      <div class="col-3 border-end position-relativer" style="height: 500px">
        <div
          class="position-absolute d-flex gap-5 fs-5"
          style="transform: rotate(-90deg); top: 430px; left: -150px"
        >
          <RouterLink
            to="/cocktail"
            exact-active-class="active"
            class="text-decoration-none text-white"
            >Cocktail</RouterLink
          >
          <RouterLink
            to="/mocktail"
            exact-active-class="active"
            class="text-decoration-none text-white"
            >Mocktail</RouterLink
          >
          <RouterLink
            to="/coffee"
            exact-active-class="active"
            class="text-decoration-none text-white"
            >Coffee</RouterLink
          >
          <RouterLink to="/" exact-active-class="active" class="text-decoration-none text-white"
            >Shakes</RouterLink
          >
        </div>
      </div>
      <div class="col-9">
        <RouterView />
      </div>
    </div>
  </section>
</template>
<style scoped>
.active {
  padding: 0.5rem 1rem;
  background-color: #6b8e23;
  border-radius: 0.5rem;
}
</style>
