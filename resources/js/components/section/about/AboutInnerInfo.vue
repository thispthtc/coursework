<template>
    <div class="about-inner-info" >
        <div class="about-item" v-for="(item, index) in aboutItem" :key="index">
            <img class="about-icon" :src="item.img" alt="img">
            <p class="about-title">{{ item.text }}</p>
        </div>

        <Button class="btn-about" text="Подбробнее"/>
    </div>
</template>

<script>
import Button from "../../UI/Button.vue"

export default {
    name: "AboutInnerInfo",
    data() {
        return {
            aboutItem: [
                {
                    img: this.getImageUrl('clock.png'),
                    text: "8:00 - 23:00"
                },
                {
                    img: this.getImageUrl('restaurant.png'),
                    text: "Огромный выбор меню"
                },
                {
                    img: this.getImageUrl('ok.png'),
                    text: "Приятная атмосфера"
                },
                {
                    img: this.getImageUrl('map.png'),
                    text: "Центр города"
                },

            ]
        }
    },
    components: {Button},
    methods: {
        getImageUrl: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        }
    }
}

</script>

<style>
    .about-inner-info {
        margin-top: 90px;
    }

    .about-item {
        display: flex;
        align-items: center;
        margin-top: 60px;
    }

    .about-icon {
        width: 52px;
    }

    .about-title {
        font-size: 32px;
        font-weight: bold;
        letter-spacing: .2em;
        font-family: "Open Sans", sans-serif;
        margin-left: 85px;
    }


    .btn-about {
        color: #6CAE4B;
        border-color: #6CAE4B;
        margin-top: 85px;
    }

    .btn-about:hover {
        background: #6CAE4B;
        color: white;
    }
</style>
