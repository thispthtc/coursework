<template>
    <div class="slider">
        <div class="slider-inner">
            <SliderItem
                v-for="(sliderItem, index) in SLIDER_ITEMS"
                :key="index"
                :slider-item="sliderItem"
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
                    @click="nextSlide"
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
        let sliderItems = document.querySelectorAll(".slider-item");
        return {
            color: "#6CAE4B",
            currentSlide: sliderItems.length-1
        };
    },
    props: {
        sliderItem: {
            type: Object
        }
    },
    computed: {
        ...mapGetters(["SLIDER_ITEMS"]),
    },
    methods: {
        ...mapActions(["GET_ITEMS_FROM_API"]),

        nextSlide() {
            let sliderItems = document.querySelectorAll(".slider-item");
            console.log(+this.currentSlide)
            sliderItems[this.currentSlide].style.opacity = "0%"
            this.currentSlide++
        }
    },
    mounted() {
        this.GET_ITEMS_FROM_API().then((response) => {
            if (response.data) console.log(response.data);
        });
    },
};
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



.chevron-right-icon .material-design-icon__svg,
.chevron-left-icon .material-design-icon__svg {
    border: 3px solid #6cae4b;
    border-radius: 100px;
    cursor: pointer;
    margin-left: 20px;
}

.chevron-right-icon .material-design-icon__svg:hover,
.chevron-left-icon .material-design-icon__svg:hover {
    fill: white;
    background: #6cae4b;
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
    letter-spacing: 0.2em;
}
</style>
