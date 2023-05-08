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

}
</style>
