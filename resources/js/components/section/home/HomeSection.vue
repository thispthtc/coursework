<template>
    <section class="home">
        <img class="home-bg" :src="image"  alt="">
        <Container>
            <div class="home-inner">
                <HomeInnerInfo />
                <Slider />
            </div>
        </Container>
        <div class="bg-icon" v-for="i in 7">
            <div class="bg-icon-item" v-for="i in 10">
                <coffee-outline-icon
                    :fill-color="'#6CAE4B'"
                    class="icon"
                    :size="(Math.random() + 12) * 5"
                />
                <food-icon
                    :fill-color="'#6CAE4B'"
                    class="icon"
                    :size="(Math.random() + 10) * 5"
                />
                <glass-wine-icon
                    :fill-color="'#6CAE4B'"
                    class="icon"
                    :size="(Math.random() + 10) * 5"
                />
                <beer-outline-icon
                    :fill-color="'#6CAE4B'"
                    class="icon"
                    :size="(Math.random() + 10) * 5"
                />
            </div>
        </div>
    </section>
</template>

<script>
import Container from "../../Container.vue";
import Button from "../../UI/Button.vue";
import Slider from "../../UI/slider/Slider.vue";
import HomeInnerInfo from "./HomeInnerInfo.vue";
import CoffeeOutlineIcon from "vue-material-design-icons/CoffeeOutline.vue";
import FoodIcon from "vue-material-design-icons/Food.vue";
import GlassWineIcon from "vue-material-design-icons/GlassWine.vue";
import BeerOutlineIcon from "vue-material-design-icons/BeerOutline.vue";

export default {
    data() {
        return {
            image: import.meta.env.VITE_APP_IMAGE_PATH + "img_5.png",
        };
    },
    methods: {},
    name: "HomeSection",
    components: {
        BeerOutlineIcon,
        GlassWineIcon,
        FoodIcon,
        CoffeeOutlineIcon,
        HomeInnerInfo,
        Slider,
        Button,
        Container,
    },
    mounted() {
        const icons = document.querySelectorAll(".icon");
        icons.forEach(icon => {
            icon.style.margin = Math.random() * 1000 + "px";
            // icon.style.margin = Math.random() * 100 + "px";
            icon.style.rotate = Math.random() * 2 + "rad";
        });
    },
};
</script>

<!-- todo: доделелать фон -->

<style>
body {
    overflow-x: hidden;
}
.home {
    padding: 60px 0;
    position: relative;
}

.coffee-outline-icon .material-design-icon__svg {
    transform: rotate(2rad);
}

.food-icon .material-design-icon__svg {
    transform: rotate(5rad);
}
.glass-wine-icon {
    transform: rotate(1rad);
}

.beer-outline-icon .material-design-icon__svg {
}

.home-bg {
    position: absolute;
    z-index: -999;
    width: 100%;
    top: 0;
    margin-top: -1px;
    height: 100%;
}

.bg-icon {
    position: absolute;
    display: flex;
    z-index: -99;
    opacity: 0.6;
    top: 0;
    right: 0;
    margin-top: 500px;
    width: 80%;
    height: 600px;
}

.bg-icon-item {
}

.home-inner {
    display: flex;
    justify-content: space-between;
}
</style>
