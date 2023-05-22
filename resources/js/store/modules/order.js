import axios from "axios";

export default {
    state: {
        order: {}
    },
    getters: {

    },
    mutations: {
        SET_ORDER_TO_API: (state, payload) => state.order = payload
    },
    actions: {
        SEND_ORDER_TO_API({commit}, order) {
            debugger
            return axios({
                method: "POST",
                url: "api/order",
                data: order,
                header: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                commit("SET_ORDER_TO_API", response.data)
                console.log(response.data)
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
