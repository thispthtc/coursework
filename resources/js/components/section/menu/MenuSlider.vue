<template>
    <div class="menu-slider">
        <img class="m-bg" :src="getImageUrl('bg-slider.png')" alt="">
        <MenuSliderItem
            v-for="(menuItem, index) in MENU_ITEMS_BY_CATEGORY[1]"
            :key="index"
            :menu-item="menuItem"
        />
        <div class="m-sl-nav">
            <MenuSliderNav v-for="i in 5" :key="i" :index="i" />
        </div>
    </div>
</template>

<script>
import MenuSliderItem from "@/components/section/menu/MenuSliderItem.vue";
import MenuSliderNav from "@/components/section/menu/MenuSliderNav.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    components: {MenuSliderItem, MenuSliderNav},
    computed: {
        ...mapGetters(["MENU_ITEMS_BY_CATEGORY"]),
    },
    methods: {
        ...mapActions(["GET_CATEGORY_MENU_FROM_API"]),


        getImageUrl: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        }
    },
    mounted() {


        this.GET_CATEGORY_MENU_FROM_API("4").then(response => {
            if (response.data) console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
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
