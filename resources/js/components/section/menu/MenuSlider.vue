<template>
    <div class="menu-slider">
        <img class="m-bg" :src="getImageUrl('bg-slider.png')" alt="">
        <MenuSliderItem/>
        <MenuSliderNav/>
    </div>
</template>

<script>
import MenuSliderItem from "@/components/section/menu/MenuSliderItem.vue";
import MenuSliderNav from "@/components/section/menu/MenuSliderNav.vue";

export default {
    components: {MenuSliderItem, MenuSliderNav},
    methods: {
        getImageUrl: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        }
    }
}
</script>

<style>
    .m-bg {
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;
    }
</style>
