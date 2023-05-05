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
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: white;
    background: var(--green);
    padding: 28px 62px;
    text-align: center;
    width: 484px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
