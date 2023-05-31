<template>
    <section class="admin-page">
        <Container>
            <header class="admin-header">
                <h1><router-link to="/">сердце города</router-link></h1>

                <nav class="admin-nav">
                    <div class="admin-btn">
                        <button class="admin-link admin-link-active" @click="switchSection">заказы</button>
                    </div>

                    <div class="admin-btn">
                        <button class="admin-link" @click="switchSection">меню</button>
                    </div>
                </nav>
            </header>

            <div class="admin-inner">
                <div v-if="section === 'заказы'" class="order-inner">
                    <div class="order-filter">
                        <div class="search-div">
                            <label for="search">Поиск</label>
                            <input id="search" type="text">
                        </div>
                        <div class="status-filter">
                            <button @click="selectStatus('новый')" class="status-btn new" :class="filter === 'new' ? 'new-active' : ''">Новый</button>
                            <button @click="selectStatus('принят')" class="status-btn accept" :class="filter === 'accept' ? 'accept-active' : ''">Принят</button>
                            <button @click="selectStatus('завершен')" class="status-btn finish" :class="filter === 'finish' ? 'finish-active' : ''">Завершен</button>
                        </div>
                    </div>

                    <div
                        class="admin-order-item"
                        @click="toggleItem"
                        v-for="(orderItem, index) in ORDER"
                        :key="index"
                        :class="orderItem.status === 'новый' ? 'is-new' : orderItem.status === 'принят' ? 'is-accept' : 'is-finish'"
                    >
                        <div class="main-info">
                            <p class="main-info-item">ФИО: {{ orderItem.full_name }}</p>
                            <p class="main-info-item">ТЕЛ: {{ orderItem.number }}</p>
                            <p class="main-info-item">КОЛ-ВО: {{ orderItem.guest_count }}</p>
                            <p class="main-info-item">ДАТА: {{ orderItem.date }}</p>

                            <chevron-down-icon class="down-list" :size="44" />
                        </div>

                        <div class="info-panel hidden">
                            <div class="order-description">
                                <p>{{ orderItem.description }}</p>
                            </div>

                            <div class="status">
                                <button class="status-btn"  @click.prevent="changeStatus('новый', orderItem.id)" :class="orderItem.status === 'новый' ? 'new-active' : '' " >Новый</button>
                                <button class="status-btn"  @click.prevent="changeStatus('принят', orderItem.id)" :class="orderItem.status === 'принят' ? 'accept-active' : ''">Принят</button>
                                <button class="status-btn"  @click.prevent="changeStatus('завершен', orderItem.id)" :class="orderItem.status === 'завершен' ? 'finish-active' : ''">Завершен</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="section === 'меню'" class="menu-inner">
                    <MainMenuSection
                        :admin="true"
                    />
                </div>
            </div>
        </Container>
    </section>
</template>

<script>
import Container from "@/components/Container.vue";
import ChevronDownIcon from "vue-material-design-icons/ChevronDown.vue";
import MainMenuSection from "@/components/menuSections/MainMenuSection.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    components: {MainMenuSection, ChevronDownIcon, Container},
    data() {
        return {
            section: "заказы",
            filter: null
        }
    },
    computed: {
        ...mapGetters(['ORDER']),
    },
    methods: {
        ...mapActions(['GET_ORDER_FROM_API', "CHANGE_STATUS", "GET_ORDER_BY_STATUS"]),

        toggleItem(event) {
            let panel = document.querySelectorAll('.info-panel')
            let item = document.querySelectorAll('.admin-order-item')
            let info = document.querySelectorAll('.main-info')

            for (let i = 0; i < item.length; i++) {
                if (event.target === item[i] || event.target === info[i]) {
                    panel[i].classList.toggle('hidden')
                }
            }
        },

        switchSection(event) {
            const adminLink = document.querySelectorAll('.admin-link')

            adminLink.forEach(link => {
                link.classList.remove('admin-link-active')
                if (link === event.target) {
                    event.target.classList.add('admin-link-active')
                    this.section = event.target.innerHTML
                }
            })
        },
        changeStatus(status, id) {
            const statusData = {
                status: status,
                id: id
            }
            this.CHANGE_STATUS(statusData).then(response => {
            }).catch(error => {
                console.log(error)

            })

            this.GET_ORDER_FROM_API().then(response => {
            }).catch(error => {
                console.log(error)
            })
        },
        selectStatus(status) {
            switch (status) {
                case 'новый':
                    this.filter = 'new';
                    break
                case 'принят':
                    this.filter = 'accept';
                    break
                case 'завершен':
                    this.filter = 'finish';
                    break
            }
            this.GET_ORDER_BY_STATUS(status).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        }
    },

    mounted() {
        this.GET_ORDER_FROM_API().then(response => {
        }).catch(error => {
            console.log(error)
        })

    },
}
</script>

<style>
    .menu-inner .m-c-btn {
        box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .menu-inner .add {
        padding: 20px 0;
        justify-content: center;
    }

    .order-filter {
        display: flex;
        justify-content: space-between;
    }

    .order-filter input {
        width: 500px;
    }

    .search-div {
        display: flex;
    }

    .search-div label {
        padding: 10px 20px;
        background: #006060;
        color: white;
        text-transform: uppercase;
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
        border-radius: 10px 0 0 10px;
    }

    .search-div input {
        border: 3px solid #006060;
        border-radius: 0 10px 10px 0;
        font-size: 16px;
        padding: 10px 15px;
    }

    .admin-btn:last-child {
        margin-right: 0;
    }

    .admin-link:last-child {
        margin-right: 0;
    }

    .status-filter .status-btn {
        font-size: 14px;
        padding: 10px 20px;
        margin-right: 30px;
    }

    .status-filter .status-btn:last-child {
        margin: 0;
    }

    .admin-inner {
        margin-top: 100px;
    }

    .admin-page {
        padding: 50px 0;
    }

    .admin-header {
        display: flex;
        justify-content: space-between;
    }

    .admin-nav {
        display: flex;
    }

    .admin-btn {
        position: relative;
        margin-right: 50px;
    }

    .hidden {
        display: none !important;
    }

    .admin-link-active {
        background: #006060 !important;
        color: white !important;
    }

    .admin-link {
        background: white;
        border: none;
        text-transform: uppercase;
        font-size: 20px;
        color: #006060;
        padding: 25px 50px;
        border-radius: 10px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.25);
        font-weight: bold;
        margin-right: 50px;
        cursor: pointer;
    }

    .admin-header a {
        color: #006060;
        text-transform: uppercase;
        font-size: 36px;
    }

    .admin-order-item {
        width: 100%;
        margin-top: 40px;
        padding: 40px 60px;
        background: white;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        cursor: pointer;
    }

    .is-new {
        border: 3px solid #6CAE4B;
    }

    .is-accept {
        border: 3px solid #2F67F9;
    }

    .is-finish {
        border: 3px solid #d4d4d4;
        opacity: .5;
    }

    .main-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .main-info-item {
        color: black;
        font-size: 20px;
        font-weight: bold;
        font-family: "Open Sans", sans-serif;
    }

    .info-panel {
        margin-top: 40px;
        display: flex;
    }

    .order-description {
        width: 1024px;
        height: 200px;
        background: #FFFFFF;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 20px 30px;
    }

    .status {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 85px;
    }

    .status-btn {
        padding: 15px 75px;
        background: white;
        border-radius: 10px;
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 20px;
        cursor: pointer;
    }

    .new {
        color: #6CAE4B;
        border: 3px solid #6CAE4B;
    }

    .new-active {
        color: white !important;
        background: #6CAE4B;
    }

    .accept-active {
        color: white !important;
        background: #2F67F9;
    }

    .finish-active {
        color: white !important;
        background: #d4d4d4;
    }

    .accept {
        color: #2F67F9;
        border: 3px solid #2F67F9;
    }

    .finish {
        color: #d4d4d4;
        border: 3px solid #d4d4d4;
    }
</style>
