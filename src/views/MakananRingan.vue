<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { MakananRingan } from '../plugins'
</script>
<template>
  <div class="d-grid pt-5 gap-4 overflow-y-scroll pb-3" style="height: calc(100vh - 200px)">
    <div v-for="item in MakananRingan" :key="item.id">
      <div class="card border-0 w-75 mx-auto">
        <div class="p-1">
          <div
            class="image bg-light overflow-hidden position-relative d-flex align-items-center"
            style="height: 180px"
          >
            <img :src="item.gambar" />
            <div
              class="rounded-circle shadow-sm border p-1 bg-white position-absolute"
              style="top: 10px; right: 10px"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="#ccc"
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="p-2">
            <h5 class="text-first">{{ item.nama }}</h5>
            <p class="fw-semibold m-0">{{ item.harga }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
