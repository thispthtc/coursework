import axios from "axios";

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
                // window.location.href = 'admin'
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
