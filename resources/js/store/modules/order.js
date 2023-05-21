import axios from "axios";

export default {
    state: {
        order: {}
    },
    getters: {

    },
    mutations: {
        SET_ORDER_TO_API: (state, order) => state.order = order
    },
    actions: {
        SEND_ORDER_TO_API({commit}, order) {
            return axios.post('/api/send_order', order).then(response => {
                commit("SET_ORDER_TO_API", response.data)
                console.log(response.data)
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
