<template>
    <section class="menu">
        <Container>
            <TitleSection title="Актуальное предложение" />
            <div class="menu-inner">
                <MenuSlider/>
            </div>
        </Container>
    </section>
</template>

<!-- todo: сделеть заголовок ------------------------- ГОТОВО -->
<!-- todo: сделать фон ------------------------------- НЕ ГОТОВО -->
<!-- todo: сделать карточку сладера ------------------ ГОТОВО -->
<!-- todo: сделать навигацию слайдера ---------------- НЕ ГОТОВО -->

<script>
import Container from "@/components/Container.vue";
import TitleSection from "@/components/UI/TitleSection.vue";
import MenuSlider from "@/components/section/menu/MenuSlider.vue";

export default {
    components: {MenuSlider, TitleSection, Container}

}
</script>

<style>
    .menu {
        padding: 55px 0;
    }


</style>
