<template>
    <div class="m-sl-item">
        <div class="sl-image">
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
        box-shadow: 10px 10px 100px rgba(58, 99, 72, 0.25);
        border-radius: 20px;
        margin: 75px auto;
    }

    .sl-image {
        width: 50%;
        display: flex;
    }

    .sl-image img {
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
</style>
