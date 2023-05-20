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
                :menu-item="menuItem"
            />
        </div>
    </div>
</template>

<script>
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
    props: {
        category: {
            type: String,
            require: false,
            default() {
                return "2"
            }
        }
    },
    mounted() {
        this.GET_CATEGORY_MENU_FROM_API(this.category).then(response => {
            console.log(response)
            if (response.data) console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
}
import MenuSliderItem from "@/components/section/menu/MenuSliderItem.vue";
import MenuSliderNav from "@/components/section/menu/MenuSliderNav.vue";

import {mapActions, mapGetters} from "vuex";
</script>

<style>
    .m-bg {
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;
    }
</style>
