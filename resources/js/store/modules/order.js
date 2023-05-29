import axios from "axios";

export default {
    state: {
        order: {}
    },
    getters: {
        ORDER(state) {
            return state.order
        }
    },
    mutations: {
        SET_ORDER_TO_API: (state, payload) => state.order = payload,
        SET_ORDER_FROM_API: (state, payload) => state.order = payload,
        SET_ORDER_STATUS: (state, payload) => state.order.status = payload
    },
    actions: {
        GET_ORDER_FROM_API({commit}) {
            return axios({
                method: "GET",
                url: "api/order",
            }).then(response => {
                commit("SET_ORDER_FROM_API", response.data.reverse())
            }).catch(e => {
                console.log(e)
            })
        },
        SEND_ORDER_TO_API({commit}, order) {
            return axios({
                method: "POST",
                url: "api/order",
                data: order,
                header: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                commit("SET_ORDER_TO_API", response.data)
            }).catch(e => {
                console.log(e)
            })
        },
        CHANGE_STATUS({commit}, statusData) {
            return axios({
                method: "PATCH",
                url: `api/order/${statusData.id}`,
                data: {
                    status: statusData.status
                }
            }).then(response => {
                commit("SET_ORDER_STATUS", response.data)
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
