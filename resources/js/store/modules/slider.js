export default {
    state: {
        sliderItems: [],
    },
    getters: {
        SLIDER_ITEMS(state) {
            return state.sliderItems;
        },
    },
    mutations: {
        SET_ITEMS_TO_STATE: (state, sliderItems) => state.sliderItems = sliderItems
    },
    actions: {
        GET_ITEMS_FROM_API({ commit }) {
            return axios({
                url: "http://127.0.0.1:8000/api/home",
                method: "GET",
            })
                .then((items) => {
                    commit("SET_ITEMS_TO_STATE", items.data);
                    return items;
                })
                .catch((error) => {
                    return error;
                });
        },
    },
};
