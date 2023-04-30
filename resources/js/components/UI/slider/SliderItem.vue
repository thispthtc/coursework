<template>
    <div class="slider-item" :style="{ 'margin-left': slide }">
        <div class="slider-item-view">
            <img class="slider-img" src="@/assets/image/sliderItem1.png" alt="">
            <p>E-ON ORIGINAL KIWI1</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SliderItem",
    methods: {
    },
    computed: {
        slide() {
            return this.$emit('slide')
        }
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