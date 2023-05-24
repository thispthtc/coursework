<template>
    <nav class="header-nav">
        <router-link class="nav-link" to="/">Главная</router-link>
        <router-link class="nav-link" to="/menu">Меню</router-link>
        <router-link class="nav-link" to="/order">Забронировать</router-link>
        <router-link class="nav-link" to="/admin">Админ</router-link>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style>
.header-nav {
    display: flex;
}

.nav-link {
    margin-left: 77px;
    color: #006060;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.2em;
    font-family: "Open Sans", sans-serif;
    margin-top: 20px;
}

.nav-link::after {
    content: "";
    background-color: #006060;
    display: flex;
    text-align: center;
    width: 0;
    height: 3px;
    border-radius: 100px;
    margin: 10px auto;
    transition: all 0.5s linear;
}

.nav-link:hover::after {
    width: 95%;
    transition: all 0.2s linear;
}

.nav-link:first-child {
    margin-left: 0;
}
</style>
