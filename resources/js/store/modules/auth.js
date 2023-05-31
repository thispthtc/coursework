import axios from "axios";
import router from "@/router";

export default {
    state: {
        user: null
    },
    getters: {
        USER(state) {
            return state.user
        }
    },
    mutations: {
        SET_AUTH: (state, user) => state.user = user
    },
    actions: {
        GET_AUTH({commit}, user) {
            return axios({
                method: "POST",
                url: 'api/auth',
                data: user
            }).then(r => {
                commit('SET_AUTH', r.data)
                if (r.data.status === 'success') {
                    console.log('success')
                    router.push('/admin')
                }
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
