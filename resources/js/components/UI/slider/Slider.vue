<template>
  <div class="slider">
    <div class="slider-inner">
        <SliderItem
            v-for="(sliderItem, index) in SLIDER_ITEMS"
            :key="index"
            :slider-item="sliderItem"
            :style="'margin-left:' + slide"
        />
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
import SliderItem from "@/components/UI/slider/SliderItem.vue";

export default {
    components: {
        SliderItem,
        ChevronRightIcon,
        ChevronLeftIcon,
        ChevronDoubleLeftIcon,
        TagArrowRightIcon,
        ArrowLeftCircleIcon,
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
    data() {
        return {
            color: "#6CAE4B",
            sliderItems: []
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
            "GET_ITEMS_FROM_API",
            "GET_NEXT_SLIDE",
            "GET_PREV_SLIDE"
        ])
    },
    mounted() {
        this.GET_ITEMS_FROM_API().then(response => {
            if (response.data) console.log(response.data)
        });
    },
    name: "Slider"
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

  .chevron-right-icon .material-design-icon__svg {
      border: 3px solid #6CAE4B;
      border-radius: 100px;
      cursor: pointer;
      margin-left: 20px;
  }

  .chevron-right-icon .material-design-icon__svg:hover {
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
