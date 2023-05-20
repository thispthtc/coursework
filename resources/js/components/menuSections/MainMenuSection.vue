<template>
    <section class="main-menu">

        <div class="menu-category-nav" >
            <button
                v-for="(category) in MENU_LIST_CATEGORY"
                data-index=""
                class="m-c-btn"
                @click="changeMenu"
            >
            {{ category.name }}
            </button>
        </div>

        <MenuSlider :category="category" class="main-menu-slider"/>
    </section>
</template>

<script>
import MenuSlider from "@/components/section/menu/MenuSlider.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    components: {MenuSlider},
    data() {
        return {
            category: "2",
            index: "1"
        }
    },
    computed: {
        ...mapGetters(["MENU_ITEMS_BY_CATEGORY", "MENU_LIST_CATEGORY"])
    },
    methods: {
        ...mapActions(["GET_CATEGORY_MENU_FROM_API", "GET_MENU_LIST_CATEGORY"]),

        changeMenu(e) {
            let menuBtn = document.querySelectorAll('.m-c-btn')

            menuBtn.forEach(item => {
                item.classList.remove('m-c-btn-active')
            })

            this.category = e.target.dataset.index
            e.target.classList.add('m-c-btn-active')
            this.GET_CATEGORY_MENU_FROM_API(this.category)
        }
    },
    mounted: function () {
        let menuBtns = document.querySelectorAll('.m-c-btn')
        menuBtns.forEach((item) => {
            item.dataset.index = this.index
            this.index = parseInt(this.index)
            this.index++
        })

        this.GET_MENU_LIST_CATEGORY().then(response => {
            if (response.data) console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>

<style>
    .main-menu {
        display: flex;
        justify-content: space-between;
        padding: 30px 0;
    }

    .main-menu-slider .m-bg {
        display: none;
    }

    .main-menu-slider .m-sl-item {
        margin-top: 0;
    }

    .menu-category-nav {
        display: flex;
        flex-direction: column;
        padding: 0 15px;
    }

    .m-c-btn {
        font-size: 25px;
        background: white;
        border: none;
        padding: 40px 80px;
        border-radius: 20px;
        margin-top: 35px;
        cursor: pointer;
        font-family: Raleway, sans-serif;
        font-weight: bold;
        color: #006060;
        box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.1);
    }

    .m-c-btn:first-child {
        margin: 0;
    }

    .m-c-btn-active {
        background: #006060;
        color: white;
    }
</style>
