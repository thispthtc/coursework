<template>
    <img class="logo" v-if="theme === 'dark'" :src="getImgUrl('logo-dark.png')" alt="">
    <img class="logo" v-else :src="getImgUrl('conts/logo.png')"  alt="">
</template>

<script>
export default {
    name: "Logo",
    methods: {
        getImgUrl: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        }
    },
    props: {
        theme: {
            type: String
        }
    }
};
</script>

<style></style>
