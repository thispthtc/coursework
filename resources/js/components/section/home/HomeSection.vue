<template>
    <section class="home">
        <img class="home-bg" :src="image" alt="">
        <Header/>
        <Container>
            <div class="home-inner">
                <HomeInnerInfo />
                <Slider />
            </div>
        </Container>
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
import Header from "@/components/section/Header.vue";

export default {
    data() {
        return {
            image: import.meta.env.VITE_APP_IMAGE_PATH + "conts/bg.jpg",
        };
    },
    methods: {},
    name: "HomeSection",
    components: {
        Header,
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
    },
};
</script>

<!-- todo: доделелать фон -->

<style>
body {
    overflow-x: hidden;
}

.home {
    position: relative;
    background: linear-gradient(90deg, #000000 -6.12%, rgba(217, 217, 217, 0) 62.42%);
}

.home-bg {
    position: absolute;
    z-index: -999;
    width: 100%;
    top: 0;
    height: 100%;
}

.home-inner {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
}


</style>
