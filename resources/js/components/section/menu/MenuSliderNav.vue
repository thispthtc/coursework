<template>
    <div class="m-sl-nav">
        <button class="active">Рис с брокколи</button>
        <button>салат с авакадо</button>
        <button>салат с авакадо</button>
        <button>салат с авакадо</button>
        <button>салат с авакадо</button>
    </div>
</template>

<script>
export default {}
</script>

<style>
    .m-sl-nav {
        display: flex;
        width: 1360px;
        margin: 0 auto;
        justify-content: space-between;
        background: white;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 36px 48px;
    }

    .m-sl-nav button {
        font-size: 22px;
        color: black;
        opacity: .5;
        font-family: Raleway, sans-serif;
        text-transform: uppercase;
        background: inherit;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }

    .active {
        color: #6CAE4B !important;
        opacity: 1 !important;
    }
</style>
