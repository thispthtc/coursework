<template>
  <div class="slider">
    <div class="slider-inner">
      <div class="slider-item" :style="{ 'margin-left': slide }">
        <div class="slider-item-view">
          <img class="slider-img" src="" alt="132">
          <p class="slider-item-title">E-ON ORIGINAL KIWI1</p>
          <img class="sl-item-bg" src="" alt="">
        </div>
      </div>

      <div class="slider-item">
          <div class="slider-item-view">
              <img class="slider-img" src="" alt="132">
              <p class="slider-item-title">E-ON ORIGINAL KIWI1</p>
              <img class="sl-item-bg" src="" alt="">
          </div>
      </div>

      <div class="slider-item">
          <div class="slider-item-view">
              <img class="slider-img" src="" alt="132">
              <p class="slider-item-title">E-ON ORIGINAL KIWI1</p>
              <img class="sl-item-bg" src="" alt="">
          </div>
      </div>
    </div>
    <div class="slider-item-nav">
      <p class="slider-item-nav-title">Коктели</p>
      <div class="slider-nav">
        <chevron-left-icon
           class="slider-btn"
           :size="44"
           :fill-color="color"
           @click="prevSlide"
        />
        <chevron-right-icon
          class="slider-btn"
          :size="44"
          :fill-color="color"
          @click="nextSLide"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

import ArrowLeftCircleIcon from "vue-material-design-icons/ArrowLeftCircle.vue";
import TagArrowRightIcon from "vue-material-design-icons/TagArrowRight.vue";
import ChevronDoubleLeftIcon from "vue-material-design-icons/ChevronDoubleLeft.vue";
import ChevronLeftIcon from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";

export default {
  name: "Slider",
  components: {
      ChevronRightIcon,
      ChevronLeftIcon,
      ChevronDoubleLeftIcon,
      TagArrowRightIcon,
      ArrowLeftCircleIcon,
  },
  data() {
    return {
        color: "#6CAE4B"
    }
  },
  computed: {
      ...mapGetters([
          'CURRENT_SLIDE_INDEX',
          "SLIDER_ITEMS"
      ]),

    slide() {
        return (-100 * this.CURRENT_SLIDE_INDEX) + "%";
    }
  },
  methods: {
    nextSLide() {
      this.GET_NEXT_SLIDE();
    },
    prevSlide() {
      this.GET_PREV_SLIDE();
    },
      ...mapActions([
          "GET_NEXT_SLIDE",
          "GET_PREV_SLIDE"
      ])
  }
}
</script>

<style>
  .slider {
    width: 808px;
  }

  .slider-inner {
    display: flex;
    outline: 2px solid var(--green);
    border-radius: 50px;
      background-color: white;

  }

  .sl-item-bg {
      position: absolute;
      width: 100%;
      bottom: 0;
  }

  .slider-item {
		height: 588px;
      border-radius: 40px;
      position: relative;
  }

  .slider-item-title {
      text-transform: uppercase;
      color: white;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      font-size: 20px;
      letter-spacing: .2em;
      padding: 30px 50px;
      background: #559634;
      border-radius: 40px;
      z-index: 1;

  }

  .slider-item-view {
    width: 808px;
    height: 588px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    position: absolute;
      border-radius: 40px;
  }

  .slider-img {
    height: 500px;
      z-index: 1;
  }

  .material-design-icon__svg {
      border: 3px solid #6CAE4B;
      border-radius: 100px;
      cursor: pointer;
      margin-left: 20px;
  }

  .material-design-icon__svg:hover {
      fill: white;
      background: #6CAE4B;
  }

  .slider-item-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;
  }

  .slider-item-nav-title {
      font-size: 32px;
      text-transform: uppercase;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      color: var(--green);
      letter-spacing: .2em;
  }
</style>
