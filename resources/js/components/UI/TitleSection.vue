<template>
    <h1 class="section-title">
        {{ title }}
    </h1>
</template>

<script>
export default {
    name: "TitleSection",
    props: {
        title: {
            type: String,
            require: true,
            default: () => {
                return "";
            },
        },
    },
};
</script>

<style>
.section-title {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    letter-spacing: .2em;
    color: #3b7b1a;
    font-size: 50px;
    text-transform: uppercase;
    text-align: center;
}
</style>
