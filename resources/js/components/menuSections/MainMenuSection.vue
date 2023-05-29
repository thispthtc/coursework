<template>
    <section class="main-menu">

        <div class="menu-category-nav" >
            <button
                v-for="(categoryItem) in MENU_LIST_CATEGORY"
                :data-index="categoryItem.id"
                class="m-c-btn"
                @click="changeMenu"
            >
                {{ categoryItem.name }}

                <span @click="deleteCategoryMenu(categoryItem.id)" v-if="admin" class="delete">-</span>
            </button>
            <div v-if="admin" class="m-c-btn add" @click="addCategoryMenu">
                <input v-model.trim="nameCategory" v-if="addCategory" class="name-category" type="text">
                <span @click="sendCategory" class="plus">+</span>
            </div>
        </div>

        <MenuSlider
            :admin="admin"
            :category="category"
            class="main-menu-slider"
        />
    </section>
</template>

<script>
import MenuSlider from "@/components/section/menu/MenuSlider.vue";
import {mapActions, mapGetters} from "vuex";
import PlusIcon from "vue-material-design-icons/Plus.vue";
import DeleteEmptyOutlineIcon from "vue-material-design-icons/DeleteEmptyOutline.vue";

export default {
    components: {DeleteEmptyOutlineIcon, PlusIcon, MenuSlider},
    data() {
        return {
            category: 1,
            addCategory: false,
            nameCategory: ""
        }
    },
    props: {
        admin: {
            type: Boolean,
            default: () => {
                return false
            }
        },
    },
    computed: {
        ...mapGetters(["MENU_ITEMS_BY_CATEGORY", "MENU_LIST_CATEGORY"])
    },
    methods: {
        ...mapActions(["GET_CATEGORY_MENU_FROM_API", "GET_MENU_LIST_CATEGORY", "SEND_CATEGORY_ITEM_TO_API", "DELETE_MENU_CATEGORY_FROM_API"]),

        changeMenu(e) {
            let menuBtn = document.querySelectorAll('.m-c-btn')

            menuBtn.forEach(item => {
                item.classList.remove('m-c-btn-active')
            })

            this.category = e.target.dataset.index
            e.target.classList.add('m-c-btn-active')
            this.GET_CATEGORY_MENU_FROM_API(this.category)
        },

        addCategoryMenu() {
            this.addCategory = true
        },

        sendCategory() {
            if (this.addCategory && this.nameCategory !== "") {
                const menuCategory = {
                    name: this.nameCategory
                }

                this.SEND_CATEGORY_ITEM_TO_API(menuCategory).then(response => {
                }).catch(error => {
                    console.log(error)
                })

                this.GET_MENU_LIST_CATEGORY()
                this.nameCategory = ""
            }
            this.addCategory = false
        },
        deleteCategoryMenu(id) {
            this.DELETE_MENU_CATEGORY_FROM_API(id).then(response => {

            }).catch(error => {
                console.log(error)
            })
            this.GET_MENU_LIST_CATEGORY().then(response => {

            }).catch(error => {
                console.log(error)
            })
        }
    },
    mounted(){
        this.GET_MENU_LIST_CATEGORY().then(response => {
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>

<style>
    .delete {
        margin-left: 40px;
        color: #7d0c09;
        border: 3px solid #7d0c09;
        padding: 10px 20px;
        background: white;
        font-size: 30px;
        font-weight: bold;
        border-radius: 50%;
    }

    .m-c-btn .plus{
        font-size: 50px;
        margin-left: 30px;
    }

    .name-category {
        border: none;
        width: 50%;
        height: 100%;
        font-size: 25px;
        font-family: Raleway, sans-serif;
        font-weight: bold;
        color: #006060;
    }

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
