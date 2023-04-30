<template>
    <Header/>
    <router-view/>
</template>

<style>
  :root {
    --green: #6CAE4B;
    --red: #7D0C09;
    --dark-green: #142C08;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    transition: all .3s linear;
  }

  *:hover {
    transition: all .1s linear;
  }
</style>

<script setup>
    import Header from "./components/section/Header.vue";

</script>
