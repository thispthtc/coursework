<template>
    <form class="order-form" @submit.prevent="sendOrder">
        <div class="fullname">
            <label for="fullname">ФИО</label>
            <input id="fullname" type="text" v-model="fullname">
        </div>

        <div class="phone">
            <label for="phone">Номер телефон</label>
            <input id="phone" type="text" v-model="phone">
        </div>

        <div class="guest-count">
            <label for="guest-count">Кол-во гостей</label>
            <input id="guest-count" type="number" v-model="count">
        </div>

        <div class="date">
            <label for="date">Дата</label>
            <input id="date" type="date" v-model="date">
        </div>

        <div class="description">
            <label for="description">Дополнительные пожелания</label>
            <textarea id="description" cols="30" rows="10" v-model="description"></textarea>
        </div>

        <Button text="Забронировать"/>
    </form>
</template>

<script>
import Button from "@/components/UI/Button.vue";
import {mapActions} from "vuex";
export default {
    name: "OrderForm",
    components: { Button },
    data() {
        return {
            fullname: '',
            phone: '',
            count: 0,
            date: null,
            description: '',
        }
    },
    methods: {
        ...mapActions(["SEND_ORDER_TO_API"]),

        sendOrder() {
            const formData = {
                fullname: this.fullname,
                phone: this.phone,
                count: this.count,
                date: this.date,
                description: this.description,
            }

            // let formData = new FormData();
            //
            // formData.append('fullname',this.fullname)
            // formData.append('phone', this.phone)
            // formData.append('count', this.count)
            // formData.append('date', this.date)
            // formData.append('description', this.description)

            console.log(formData)
            console.log(this.date)
            this.SEND_ORDER_TO_API(formData)
        }
    }
}
</script>

<style>
    .order-form {
        width: 100%;
    }

    .order-form div {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }

    .order-form label {
        font-family: Raleway, sans-serif;
        color: white;
        font-size: 24px;
    }

    .order-form input, .order-form textarea {
        width: 80%;
    }
</style>
