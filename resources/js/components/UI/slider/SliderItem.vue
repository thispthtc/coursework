<template>
    <div class="slider-item">
        <div class="slider-item-view">
            <img
                class="slider-img"
                :src="getImageUrl(sliderItem.img)"
                :alt="image"
            />
            <p class="slider-item-title">{{ sliderItem.title }}</p>
            <img class="sl-item-bg" :src="getImageUrl('img_1.png')" alt="" />
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
    letter-spacing: 0.2em;
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
</style>
