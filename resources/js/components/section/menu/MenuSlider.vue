<template>
    <div class="menu-slider">
        <img class="m-bg" :src="getImageUrl('conts/bg-slider.png')" alt="">
        <MenuSliderItem
            v-for="(menuItem, index) in MENU_ITEMS_BY_CATEGORY"
            :key="index"
            :menu-item="menuItem"
            :admin="admin"
            @editMenuItem="editMenu"
        />
        <div class="m-sl-item" v-if="admin && viewAdd">
            <form class="add-menu-item" >
                <div class="main-add-info">
                    <div class="file">
                        <label for="">ФАЙЛ</label>
                        <input @change="handledImage" type="file">
                    </div>

                    <div class="name">
                        <label for="">Название</label>
                        <input v-model.trim="form.name"  type="text">
                    </div>

                    <div class="price">
                        <label for="">Цена</label>
                        <input v-model.trim="form.price" type="text">
                    </div>

                    <div class="weight">
                        <label for="">Вес</label>
                        <input v-model.trim="form.weight" type="text">
                    </div>

                    <Button @click.prevent="addMenuItem" class="btn-add" text="Добавить"/>
                </div>


                <div class="description">
                    <label for="">Описание</label>
                    <textarea v-model.trim="form.description" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>

        <div class="m-sl-item" v-if="admin && editView">
            <form class="add-menu-item">
                <div class="main-add-info">
                    <div class="file">
                        <label for="">ФАЙЛ</label>
                        <input @change="handledEditImage" type="file">
                    </div>

                    <div class="name">
                        <label for="">Название</label>
                        <input v-model.trim="edit.name"  type="text">
                    </div>

                    <div class="price">
                        <label for="">Цена</label>
                        <input v-model.trim="edit.price" type="text">
                    </div>

                    <div class="weight">
                        <label for="">Вес</label>
                        <input v-model.trim="edit.weight" type="text">
                    </div>

                    <Button @click.prevent="changeMenuItem" class="btn-add" text="Изменить"/>
                </div>


                <div class="description">
                    <label for="">Описание</label>
                    <textarea v-model.trim="edit.description" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>

        <div class="m-sl-nav">
            <MenuSliderNav
                v-for="(menuItem, index) in MENU_ITEMS_BY_CATEGORY"
                :key="index"
                :menu-item="menuItem"
                :admin="admin"
            />
            <div @click="show" class="add-menu">
                <button>
                    <plus-icon class="plus" :size="44"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import MenuSliderItem from "@/components/section/menu/MenuSliderItem.vue";
import MenuSliderNav from "@/components/section/menu/MenuSliderNav.vue";
import Button from "@/components/UI/Button.vue";

import {mapActions, mapGetters} from "vuex";
import PlusIcon from "vue-material-design-icons/Plus.vue";
export default {
    components: {PlusIcon, MenuSliderItem, MenuSliderNav, Button},
    data() {
        return {
            viewAdd: false,
            editView: false,
            form: {
                name: "",
                price: "",
                weight: "",
                description: "",
                image: null,
            },
            edit: {
                id: "",
                id_category: "",
                name: "",
                price: "",
                weight: "",
                description: "",
                image: null,
            }
        }
    },
    computed: {
        ...mapGetters(["MENU_ITEMS_BY_CATEGORY"]),
    },
    methods: {
        ...mapActions(["GET_CATEGORY_MENU_FROM_API", "SEND_MENU_ITEM_TO_API", "CHANGE_MENU_ITEM"]),

        getImageUrl: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        },
        handledEditImage(e) {
            this.edit.image = e.target.files[0]
        },
        handledImage(e) {
            this.form.image = e.target.files[0]
        },
        addMenuItem() {
            const formData = new FormData()
            formData.append('id_category', this.category)
            formData.append('name', this.form.name)
            formData.append('price', this.form.price)
            formData.append('weight', this.form.weight)
            formData.append('description', this.form.description)
            formData.append('src_img', this.form.image)

            this.SEND_MENU_ITEM_TO_API(formData).then(response => {
            }).catch(error => {
                console.log(error)
            })

            this.GET_CATEGORY_MENU_FROM_API(this.category).then(response => {
            }).catch(error => {
                console.log(error)
            })

            this.viewAdd = false
        },
        editMenu(menuItem) {
            this.editView = !this.editView

            this.edit.id = menuItem.menuItem.id
            this.edit.id_category = menuItem.menuItem.id_category
            this.edit.name = menuItem.menuItem.name
            this.edit.price = menuItem.menuItem.price
            this.edit.weight = menuItem.menuItem.weight
            this.edit.description = menuItem.menuItem.description


        },
        changeMenuItem(){
            let formData = new FormData()

            debugger
            formData.append('_method', 'PUT')


            if (this.edit.image === null) {
                formData.append('id', this.edit.id)
                formData.append('id_category', this.edit.id_category)
                formData.append('name', this.edit.name)
                formData.append('price', this.edit.price)
                formData.append('weight', this.edit.weight)
                formData.append('description', this.edit.description)
            } else {
                formData.append('id', this.edit.id)
                formData.append('id_category', this.edit.id_category)
                formData.append('name', this.edit.name)
                formData.append('price', this.edit.price)
                formData.append('weight', this.edit.weight)
                formData.append('description', this.edit.description)
                formData.append('src_img', this.edit.image)
            }

            console.log(formData.getAll("name"))

            this.CHANGE_MENU_ITEM(formData).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })

            this.GET_CATEGORY_MENU_FROM_API(this.category).then(response => {
            }).catch(error => {
                console.log(error)
            })
        },
        show() {
            this.viewAdd = !this.viewAdd
        }
    },
    props: {
        category: {
            type: Number,
            require: false,
            default() {
                return "1"
            }
        },
        admin: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    mounted() {
        this.GET_CATEGORY_MENU_FROM_API(this.category).then(response => {
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>

<style>
    .btn-add {
        border: 3px solid #006060;
        letter-spacing: 0;
        color: #006060;
    }

    .btn-add:hover {
        background: #006060;
        color: white;
    }

    .main-add-info {
        margin-right: 140px;
    }

    .main-add-info div {
        margin-bottom: 20px;
    }

    .file {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .file input, .name input, .price input, .weight input {
        padding: 10px 20px;
        background: white;
        border: 3px solid #006060;
        border-radius: 10px;
        font-family: Raleway, sans-serif;
        font-weight: bold;
        color: #006060;
    }

    .file label, .name label, .price label, .weight label {
        font-family: Raleway, sans-serif;
        font-weight: bold;
        color: #006060;
        padding: 10px 20px;
        text-transform: uppercase;
    }

    .add-menu-item {
        display: flex;
    }

    .m-bg {
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;
    }

    .m-sl-nav {
        position: relative;
    }

    .add-menu {
        position: absolute;
        right: 0;
        background: white;
        border-radius: 0 10px 10px 0;
        outline: 3px solid #6CAE4B;
        height: 100%;
        width: 100px;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .add-menu button {
        margin: 0 auto;
    }
</style>
