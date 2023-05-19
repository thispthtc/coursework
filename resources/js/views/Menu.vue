<template>
    <div class="menu-page">
        <img class="home-bg" :src="getImageUrl('bg.jpg')" alt="">
        <Header/>
        <Container>
            <MainMenuSection/>
        </Container>
    </div>
</template>

<script>
import MainMenuSection from "@/components/menuSections/MainMenuSection.vue";
import Header from "@/components/section/Header.vue";
import Container from "@/components/Container.vue";

export default {
    name: "Menu",
    components: {Container, MainMenuSection, Header},
    methods: {
        getImageUrl: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        }
    }
};
</script>

<style>
 .menu-page {
     position: relative;
     background: linear-gradient(90deg, #000000 -6.12%, rgba(217, 217, 217, 0) 62.42%);

 }


</style>
