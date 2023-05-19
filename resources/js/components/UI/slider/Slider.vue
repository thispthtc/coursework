<template>
    <div class="slider">
        <div class="slider-inner" :style="slide">
            <SliderItem
                v-for="(sliderItem, index) in MENU_ITEMS_FOR_SLIDER"
                :key="index"
                :slider-item="sliderItem"
            />
        </div>
        <div class="slider-item-nav">
            <chevron-left-icon
                class="slider-btn"
                :size="44"
                :fill-color="color"
                @click="prevSlide"
            />

            <p class="slider-item-nav-title">Напитки</p>

            <chevron-right-icon
                class="slider-btn"
                :size="44"
                :fill-color="color"
                @click="nextSlide"
            />
        </div>

        <!--    todo: доделать слайдер    -->
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

import ArrowLeftCircleIcon from "vue-material-design-icons/ArrowLeftCircle.vue";
import TagArrowRightIcon from "vue-material-design-icons/TagArrowRight.vue";
import ChevronDoubleLeftIcon from "vue-material-design-icons/ChevronDoubleLeft.vue";
import ChevronLeftIcon from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
import SliderItem from "../slider/SliderItem.vue";

export default {
    name: "Slider",
    components: {
        SliderItem,
        ChevronRightIcon,
        ChevronLeftIcon,
        ChevronDoubleLeftIcon,
        TagArrowRightIcon,
        ArrowLeftCircleIcon,
    },
    data() {
        return {
            color: "#006060",
            currentSlide: 0,
        };
    },
    computed: {
        ...mapGetters(["MENU_ITEMS_FOR_SLIDER"]),

        slide() {
            return `margin-left: ${this.currentSlide * -100}%`
        }
    },
    methods: {
        ...mapActions(["GET_SLIDER_MENU_FROM_API"]),

        nextSlide() {
            if (this.currentSlide === this.MENU_ITEMS_FOR_SLIDER.length - 1) this.currentSlide = 0
            else this.currentSlide++
        },

        prevSlide() {
            if (this.currentSlide === 0) this.currentSlide = this.MENU_ITEMS_FOR_SLIDER.length - 1
            else this.currentSlide--
        }
    },
    mounted() {
        this.GET_SLIDER_MENU_FROM_API("1").then((response) => {
            if (response.data) console.log(response.data);
        }).catch(error => {
            return error
        });
    },
};
</script>

<style>
.slider {
    width: 808px;
    overflow: hidden;
}

.slider-inner {
    display: flex;
    border-radius: 40px;
    overflow: hidden;
}

.chevron-right-icon .material-design-icon__svg,
.chevron-left-icon .material-design-icon__svg {
    margin-top: 2px;
    border: 3px solid #006060;
    border-radius: 100px;
    cursor: pointer;
}

.chevron-right-icon .material-design-icon__svg:hover,
.chevron-left-icon .material-design-icon__svg:hover {
    fill: white;
    background: #006060;
}

.slider-item-nav {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    background: white;
    padding: 10px 30px;
    border-radius: 40px;
}

.slider-item-nav-title {
    font-size: 32px;
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    color: #006060;
    letter-spacing: 0.2em;
}
</style>
