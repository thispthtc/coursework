<template>
    <button class="btn" type="submit">{{ text }}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: {
            type: String,
            default: "",
        },
    },
};
</script>

<style>
.btn {
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 0.2em;
    border: 5px solid white;
    border-radius: 10px;
    background: inherit;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    padding: 16px 28px;
    transition: all 0.3s linear;
    width: 350px;
}

.btn:hover {
    background: white;
    color: #006060;
    transition: background-color 0.1s linear;
}
</style>
