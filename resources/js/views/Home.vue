<template>
    <HomeSection />
    <AboutSection />
</template>

<script>
import HomeSection from "../components/section/home/HomeSection.vue";
import AboutSection from "../components/section/about/AboutSection.vue";

export default {
    name: "Home",
    components: { AboutSection, HomeSection },
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
