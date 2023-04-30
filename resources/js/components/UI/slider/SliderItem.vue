<template>
    <div class="slider-item">
        <div class="slider-item-view">
            <img class="slider-img" :src="getImageUrl(sliderItem.img)" :alt="image">
            <p class="slider-item-title">{{ sliderItem.title }}</p>
            <img class="sl-item-bg" src="" alt="">
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
        }
    },
    name: "SliderItem",
    methods: {
        getImageUrl(filename) {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        },
    },
    props: {
      sliderItem: {
        type: Object,
        default() {
            return {}
        }
      }
    },
    computed: {
    },
    mounted() {

    }
}
</script>

<style scoped>
.slider-item-view {
    width: 808px;
    height: 588px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
}

.slider-img {
    height: 500px;
}
</style>
