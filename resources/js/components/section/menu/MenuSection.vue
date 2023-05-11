<template>
    <section class="menu">
        <Container>
            <TitleSection title="Актуальное предложение" />
            <div class="menu-inner">

            </div>
        </Container>
    </section>
</template>

<script>
import Container from "@/components/Container.vue";
import TitleSection from "@/components/UI/TitleSection.vue";

export default {
    components: {TitleSection, Container}

}
</script>

<style>
    .menu {
        padding: 55px 0;
    }

    
</style>
