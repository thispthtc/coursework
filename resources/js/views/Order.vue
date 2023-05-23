<template>
    <section class="order-page">
        <img class="home-bg" :src="getImageUrl('bg.jpg')" alt="">
        <Header/>
        <Container>
            <OrderForm/>
        </Container>
    </section>
</template>

<script>
import Header from "@/components/section/Header.vue";
import OrderForm from "@/components/OrderForm.vue";
import Container from "@/components/Container.vue";

export default {
    name: "Order",
    components: {Container, OrderForm, Header},
    methods: {
        getImageUrl: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        }
    }
};
</script>

<style>
    .order-page {
        position: relative;
        background: linear-gradient(90deg, #000000 -6.12%, rgba(217, 217, 217, 0) 62.42%);
    }

    .order-page .home-bg {
        height: 100%;
    }

    .order-page .container {
        padding: 20px 0;
    }
</style>
