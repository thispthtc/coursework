<template>
    <section class="main-menu">

        <div class="menu-category-nav">
            <button class="m-c-btn">Напитки</button>
            <button class="m-c-btn m-c-btn-active">Актуальное</button>
            <button class="m-c-btn">Супы</button>
            <button class="m-c-btn">Десерты</button>
            <button class="m-c-btn">Салаты</button>
        </div>

        <MenuSlider class="main-menu-slider"/>
    </section>
</template>

<script>
import MenuSlider from "@/components/section/menu/MenuSlider.vue";

export default {
    components: {MenuSlider},

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
        justify-content: space-between;
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
