<template>
    <form class="order-form" @submit.prevent="sendOrder">
        <TitleSection class="order-title" title="Форма заказа"/>

        <div class="fullname">
            <label for="fullname">ФИО</label>
            <input id="fullname" type="text" v-model.trim="form.fullname" @input="formCheck" required>
            <alert-circle-outline-icon v-if="!valid.nameCheck" class="alert" :size="40" :fill-color="'#941404'"/>
            <check-circle-outline-icon v-else class="alert" :size="40" :fill-color="'#006060'"/>
        </div>

        <div class="phone">
            <label for="phone">Номер телефон</label>
            <input id="phone" type="text" v-model.trim="form.phone" @input="formCheck" required>
            <alert-circle-outline-icon v-if="!valid.phoneCheck" class="alert" :size="40" :fill-color="'#941404'"/>
            <check-circle-outline-icon v-else class="alert" :size="40" :fill-color="'#006060'"/>
        </div>

        <div class="row-div">
            <div class="guest-count">
                <label for="guest-count">Кол-во гостей</label>
                <input id="guest-count" min="1" type="number" v-model.trim="form.count" @input="formCheck" required>
                <alert-circle-outline-icon v-if="!valid.countCheck" class="alert"  @input="formCheck" :size="40" :fill-color="'#941404'"/>
                <check-circle-outline-icon v-else class="alert" :size="40" :fill-color="'#006060'"/>
            </div>

            <div class="date">
                <label for="date">Дата</label>
                <input id="date" type="date" v-model.trim="form.date" @input="formCheck" required>
                <alert-circle-outline-icon v-if="!valid.dateCheck" class="alert" :size="40" :fill-color="'#941404'"/>
                <check-circle-outline-icon v-else class="alert" :size="40" :fill-color="'#006060'"/>
            </div>
        </div>


        <div class="description">
            <label for="description">Дополнительные пожелания</label>
            <textarea id="description" cols="30" rows="10" v-model.trim="form.description"></textarea>
        </div>

        <div class="">
            <div class="disabled" v-for="(error, index) in errors" :key="index">
                {{ error }}
            </div>
            <Button class="btn-order" text="Забронировать"/>
        </div>
    </form>
</template>

<script>
import Button from "@/components/UI/Button.vue";
import {mapActions} from "vuex";
import TitleSection from "@/components/UI/TitleSection.vue";
import AlertCircleOutlineIcon from "vue-material-design-icons/AlertCircleOutline.vue";
import CheckCircleOutlineIcon from "vue-material-design-icons/CheckCircleOutline.vue";



export default {
    name: "OrderForm",
    components: {CheckCircleOutlineIcon, AlertCircleOutlineIcon, TitleSection, Button },
    data() {
        return {
            form: {
                fullname: '',
                phone: '',
                count: 1,
                date: null,
                description: '',
            },
            errors: [],
            valid: {
                nameCheck: false,
                phoneCheck: false,
                countCheck: false,
                dateCheck: false,
            }
        }
    },
    computed: {

    },
    methods: {
        ...mapActions(["SEND_ORDER_TO_API"]),

        formCheck() {
            let button = document.querySelector('.btn-order')


            this.valid.nameCheck = this.form.fullname.length > 0 && /\d/.test(this.form.fullname) === false;
            this.valid.phoneCheck = this.form.phone.length > 0;
            this.valid.countCheck = this.form.count > 0;
            this.valid.dateCheck = this.form.date !== null;

        },

        sendOrder() {
            const formData = {
                fullname: this.form.fullname,
                phone: this.form.phone,
                count: this.form.count,
                date: this.form.date,
                description: this.form.description,
            }

            if (!this.valid.nameCheck) {
                this.errors.push('Только буквы')
            }

            if (this.valid.nameCheck && this.valid.phoneCheck && this.valid.countCheck && this.valid.dateCheck) {
                this.SEND_ORDER_TO_API(formData);
            } else {
                this.errors.push('Заполните все поля')
            }
        }
    }
}
</script>

<style>
    .order-form {
        width: 1300px;
        margin: 0 auto;
        background: rgba(196, 196, 196, 0.5);
        border: 4px solid #FFFFFF;
        box-shadow: inset 0 4px 16px rgba(233, 233, 233, 0.2), inset 0 1px 40px rgba(226, 226, 226, 0.2), inset 0 -80px 65px rgba(212, 212, 212, 0.2);
        backdrop-filter: blur(25px);
        border-radius: 50px;
    }

    .date .alert, .guest-count .alert {
        position: static;
    }

    .alert {
        position: absolute;
        right: 0;
        padding: 5px 10px;
    }

    .order-title {
        letter-spacing: 0 !important;
        font-family: Raleway, sans-serif !important;
        font-size: 40px !important;
        color: #006060 !important;
        margin-top: 60px;
    }

    .disabled {
        color: #7d0c09;
        font-weight: bold;
        text-transform: uppercase;
        font-family: Raleway, sans-serif;
    }

    .fullname {
        margin-top: 80px !important;
    }

    .guest-count {
        width: 450px !important;
        margin-top: 30px !important;
    }

    .row-div {
        margin: 0 auto !important;
    }

    .fullname label,
    .phone label,
    .guest-count label,
    .date label,
    .description label
    {
        background: #006060;
        padding: 15px 30px;
        border-radius: 10px 0 0 10px;
        text-transform: uppercase;
        font-family: Raleway, sans-serif;
        font-weight: bold;
    }

    .phone label {
        width: 300px;
    }

    .guest-count label {
        width: 225px;
    }

    .description label {
        display: block;
        border-radius: 10px 10px 0 0;
        width: 100% !important;
        text-align: center;
    }

    .description textarea {
        border-radius: 0 0 10px 10px !important;
        padding: 20px !important;
    }

    .description {
        display: block !important;
    }

    .fullname input,
    .phone input,
    .guest-count input,
    .date input,
    .description textarea
    {
        font-family: Raleway, sans-serif;
        border-radius: 0 10px 10px 0;
        font-size: 20px;
        padding: 0 20px;
        border: 3px solid #006060;
        color: #006060;
    }

    .guest-count input {
        width: 150px !important;
    }

    .date {
        margin-left: 100px !important;
    }

    input:focus,
    textarea:focus {
        outline: none
    }

    .order-form div {
        width: 1000px;
        display: flex;
        margin: 30px auto;
        position: relative;
    }

    .order-form label {
        font-family: Raleway, sans-serif;
        color: white;
        font-size: 20px;
    }

    .order-form input, .order-form textarea {
        width: 100%;
    }

    .btn-order {
        justify-content: space-between;
    }
</style>
