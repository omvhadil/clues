<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-grid pt-5 gap-5 overflow-y-scroll" style="height: 520px">
    <div v-for="(item, index) in 5" :key="index" class="card border-0 w-75 mx-auto">
      <div class="card-body" style="height: 200px">
        <div class="image" style="height: 100px">
          <img
            src="/public/shakes-strowberi.png"
            class="position-absolute"
            style="width: 170px; top: -50px; left: -30px"
          />
        </div>
        <div
          class="rounded-circle shadow-sm border p-1 position-absolute"
          style="bottom: 10px; right: 10px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="#ccc"
              d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"
            ></path>
          </svg>
        </div>
        <h5 class="text-first">
          Strowberi<br />
          Smoothie <br />
          $15
        </h5>
      </div>
    </div>
  </div>
</template>
