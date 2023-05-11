<template>
    <HomeSection />
    <AboutSection />
    <MenuSection />
</template>

<script>
import HomeSection from "../components/section/home/HomeSection.vue";
import AboutSection from "../components/section/about/AboutSection.vue";
import Header from "../components/section/Header.vue";
import MenuSection from "@/components/section/menu/MenuSection.vue";

export default {
    name: "Home",
    components: {MenuSection, AboutSection, HomeSection, Header },
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Roboto", sans-serif;
}
</style>
