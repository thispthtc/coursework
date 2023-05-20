<template>
    <button id="" @click="toggleNav" class='' >{{ menuItem.name }}</button>
</template>

<script>
export default {
    computed: {
    },
    data() {
        return {
            index: 0
        }
    },
    props: {
        menuItem: {
            type: Object,
            require: true
        }
    },
    methods: {
        toggleNav(event) {
            console.log(this.first);
            let sliderItems = document.querySelectorAll('.m-sl-item')
            let navItems = document.querySelectorAll('.m-sl-nav button')

            navItems.forEach(item => {
                item.classList.remove('active')
            })

            sliderItems.forEach(item => {
                if (item.classList.contains('active-item')) {
                    item.classList.remove('active-item')
                    item.classList.add('hidden-item')
                }
            })

            if (sliderItems[event.target.id].classList.contains('hidden-item')) {
                console.log(event.target.dataset.index)
                event.target.classList.add('active')
                sliderItems[event.target.id].classList.remove('hidden-item')
                sliderItems[event.target.id].classList.add('active-item')
            }

            console.log(getComputedStyle(sliderItems[event.target.id]).display)
        }
    },
    mounted() {
        let navItems = document.querySelectorAll('.m-sl-nav button')
        let sliderItem = document.querySelector('.m-sl-item')

        navItems[0].classList.add('active')
        sliderItem.classList.add('active-item')

        navItems.forEach(item => {
            item.id = this.index
            console.log(this.index)
            this.index++
        })
    }
}
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
