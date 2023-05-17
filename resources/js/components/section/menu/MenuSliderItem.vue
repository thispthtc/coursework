<template>
    <div class="m-sl-item active-item">
        <div class="sl-image">
            <div class="img-bg img-bg1"></div>
            <div class="img-bg img-bg2"></div>
            <div class="img-bg img-bg3"></div>
            <div class="img-bg img-bg4"></div>
            <img :src="getImageUrl('food1.png')" alt="">
        </div>

        <div class="sl-item-info">
            <h2 class="info-title">Рис с брокколи</h2>

            <p class="info-description">рис с брокколи - это простое блюдо, которое состоит из отварного или жареного риса, смешанного с отварным или запеченным брокколи.</p>

            <div class="info-extend">
                <p class="info-weird">320г</p>
                <Button class="menu-btn" text="Подробнее"/>
            </div>
        </div>
    </div>

    <div class="m-sl-item hidden-item">
        <div class="sl-image">
            <div class="img-bg img-bg1"></div>
            <div class="img-bg img-bg2"></div>
            <div class="img-bg img-bg3"></div>
            <div class="img-bg img-bg4"></div>
            <img :src="getImageUrl('food1.png')" alt="">
        </div>

        <div class="sl-item-info">
            <h2 class="info-title">Рис с брокколи1</h2>

            <p class="info-description">рис с брокколи - это простое блюдо, которое состоит из отварного или жареного риса, смешанного с отварным или запеченным брокколи.</p>

            <div class="info-extend">
                <p class="info-weird">320г</p>
                <Button class="menu-btn" text="Подробнее"/>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "@/components/UI/Button.vue";

export default {
    components: {Button},
    methods: {
        getImageUrl: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        }
    }
}
</script>

<style>
    .m-sl-item {
        display: flex;
        align-items: center;
        width: 1360px;
        height: 640px;
        background: white;
        box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        margin: 75px auto 30px auto;
    }

    .m-sl-item:hover {
        box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.35);
        cursor: pointer;
    }

    .img-bg {
        background: #6CAE4B;
        border-radius: 50%;
        position: absolute;
        z-index: 0;
    }

    .img-bg1 {
        width: 155px;
        height: 155px;
        margin-left: 20%;
        margin-top: 5%;
    }

    .img-bg2 {
        margin-left: 75%;
        margin-bottom: 5%;
    }

    .img-bg3 {
        margin-left: 15%;
        margin-top: 60%;
    }

    .img-bg4 {
        width: 134px;
        height: 134px;
        margin-left: 65%;
        margin-top: 60%;
    }

    .img-bg2, .img-bg3 {
        width: 63px;
        height: 63px;
    }

    .sl-image {
        position: relative;
        width: 50%;
        display: flex;
    }

    .sl-image img {
        z-index: 2;

        width: 520px;
        margin: 0 auto;
    }

    .sl-item-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;
        width: 50%;
        height: 500px;
    }

    .info-title {
        font-size: 64px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .info-description {
        width: 570px;
        font-size: 24px;
        text-align: justify;
        font-family: "Raleway", sans-serif;
        font-weight: bold;
        color: #6CAE4B;
    }

    .info-extend {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 570px;
    }

    .info-weird {
        font-size: 20px;
        font-style: italic;
        font-family: Raleway, sans-serif;
    }

    .menu-btn {
        color: #6CAE4B;
        border-color: #6CAE4B;
        font-size: 20px;
        margin: 0;
        letter-spacing: 0;
        padding: 10px 0;
        width: 250px;
    }

    .menu-btn:hover {
        background: #6CAE4B;
        color: white;
    }

    .hidden-item {
        display: none !important;
    }

    .active-item {
        display: flex !important;
    }
</style>
