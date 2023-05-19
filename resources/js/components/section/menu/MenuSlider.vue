<template>
    <div class="menu-slider">
        <img class="m-bg" :src="getImageUrl('bg-slider.png')" alt="">
        <MenuSliderItem
            v-for="(menuItem, index) in MENU_ITEMS_BY_CATEGORY"
            :key="index"
            :menu-item="menuItem"
        />
        <div class="m-sl-nav">
            <MenuSliderNav
                v-for="(menuItem, index) in MENU_ITEMS_BY_CATEGORY"
                :key="index"
                :index="index"
                :menu-item="menuItem"
            />
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


        this.GET_CATEGORY_MENU_FROM_API("2").then(response => {
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
