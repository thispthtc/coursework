<template>
      <img class="logo" :src="getImgUrl('logo.png')"  alt="">
</template>

<script>
export default {
    name: "Logo",
    methods: {
        getImgUrl: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        }
    }
};
</script>

<style></style>
