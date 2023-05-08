<template>
    <header class="header">
        <Container>
            <div class="header-inner">
                <Logo />
                <NavBar />
            </div>
        </Container>
    </header>
</template>

<script>
import Logo from "../Logo.vue";
import NavBar from "../NavBar.vue";
import OpenFormIcon from "../OpenFormIcon.vue";
import Container from "../Container.vue";

export default {
    name: "Header",
    components: { Container, OpenFormIcon, NavBar, Logo },
};
</script>

<style>
.header {
    background-attachment: fixed;
    background-size: cover;
}

.header-inner {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 1000px) {
    .header {
        width: 1100px;
    }
}
</style>
