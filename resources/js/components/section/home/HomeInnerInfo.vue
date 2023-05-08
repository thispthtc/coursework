<template>
    <div class="home-inner-info">
        <div class="home-text">
            <h1 class="title">Добро пожаловать в</h1>
            <h1 class="title-white">сердце города</h1>

            <p class="subtitle">
                Все для вас от <br />
                всего сердца
            </p>
        </div>

        <Button text="Забронировать" />
    </div>
</template>

<script>
import Button from "../../UI/Button.vue";

export default {
    name: "HomeInnerInfo",
    components: { Button },
};
</script>

<style>
.home-inner-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title {
    color: white;
    font-size: 48px;
    letter-spacing: 0.1em;
    line-height: 56px;
}

.title-white {
    padding: 10px 5px;
    width: 500px;
    color: #006060;
    background-color: white;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 48px;
    letter-spacing: 0.1em;
    text-align: center;
    margin-top: 10px;
}

.subtitle {
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-size: 32px;
    font-weight: 400;
    color: white;
    letter-spacing: 0.2em;
    font-variant: small-caps;
    margin-top: 70px;
}
</style>
