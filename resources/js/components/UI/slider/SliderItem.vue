<template>
    <div class="slider-item">
        <div class="slider-item-view">
            <p class="item-id" :style="`color: ${ sliderItem.color }`">{{ sliderItem.id }}</p>
            <img class="slider-img" :src="getImageUrl(sliderItem.img)" alt="">
            <p class="slider-item-title">{{ sliderItem.title }}</p>
            <div class="sl-item-bg" :style="`background-color:${sliderItem.color}`"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    name: "SliderItem",
    methods: {
        getImageUrl(filename) {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename;
        },
    },
    props: {
        sliderItem: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    computed: {},
    mounted() {},
};
</script>

<style scoped>
.slider-item {
    background: white;
    height: 588px;
    border-radius: 45px;
    position: relative;
}

.item-id {
    position: absolute;
    margin: 30px 50px;
    font-family: "Open Sans", sans-serif;
    font-size: 40px;
    font-weight: bold;
    opacity: .3;
}

.slider-item-title {
    position: absolute;
    bottom: 0;
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.2em;
    padding: 30px 50px;
    border-radius: 40px;
    z-index: 1;
    color: white;
}

.slider-item-view {
    width: 808px;
    height: 588px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 40px;
    overflow: hidden;
}

.slider-img {
    width: 807px;
    z-index: 78;
    margin-top: 20px;
    border-radius: 40px;

}

.sl-item-bg {
    position: absolute;
    bottom: 0;
    background: #006060;
    width: 779px;
    height: 180px;
    margin: 15px;
    border-radius: 40px;
}
</style>
