export default {
    state: {
        menu: [],
        menuCategory: [],
    },
    getters: {
        MENU_ITEMS(state) {
            return state.menu;
        },
        MENU_ITEMS_BY_CATEGORY(state) {
            console.log(state.menuCategory)
            return state.menuCategory;
        }
    },
    mutations: {
        SET_ITEMS_TO_STATE: (state, menu) => state.sliderItems = menu,
        SET_CATEGORY_MENU_TO_STATE: (state, menuCategory) => state.menuCategory.push(menuCategory)
    },
    actions: {
        GET_ITEMS_FROM_API({ commit }) {
            return axios({
                url: "http://127.0.0.1:8000/api/menu",
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
        GET_CATEGORY_MENU_FROM_API({ commit }, category) {
            return axios({
                url: "http://127.0.0.1:8000/api/menu/" + category,
                method: "GET",
            }).then((menuItemsByCategory) => {
                commit("SET_CATEGORY_MENU_TO_STATE", menuItemsByCategory.data);
                return menuItemsByCategory;
            }).catch((error) => {
                return error;
            });
        }
    },
};
