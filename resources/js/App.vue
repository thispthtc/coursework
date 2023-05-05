<template>
    <Header />
    <router-view />
</template>

<style>
:root {
    --green: #6cae4b;
    --red: #7d0c09;
    --dark-green: #142c08;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    transition: all 0.3s linear;
}

*:hover {
    transition: all 0.1s linear;
}
</style>

<script setup>
import Header from "./components/section/Header.vue";
</script>
