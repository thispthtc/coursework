import axios from "axios";

export default {
    state: {
        menu: [],
        sliderCategory: [],
        menuCategory: [],
        menuListCategory: []
    },
    getters: {
        MENU_ITEMS(state) {
            return state.menu;
        },
        MENU_ITEMS_BY_CATEGORY(state) {
            return state.menuCategory;
        },
        MENU_ITEMS_FOR_SLIDER(state) {
            return state.sliderCategory
        },
        MENU_LIST_CATEGORY(state) {
            return state.menuListCategory
        }
    },
    mutations: {
        SET_ITEMS_TO_STATE: (state, menu) => state.sliderItems = menu,
        SET_CATEGORY_MENU_TO_STATE: (state, menuCategory) => state.menuCategory = menuCategory,
        SET_SLIDER_MENU_TO_STATE: (state, sliderCategory) => state.sliderCategory = sliderCategory,
        SET_MENU_LIST_CATEGORY: (state, menuListCategory) => state.menuListCategory = menuListCategory,
        SET_MENU_LIST_CATEGORY_TO_STATE: (state, menuListCategory) => menuListCategory.push(menuListCategory),
        SET_MENU_ITEMS_TO_STATE: (state, menu) => state.menu = menu
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
        GET_CATEGORY_MENU_FROM_API({commit}, category) {
            return axios({
                url: "http://127.0.0.1:8000/api/menu/" + category,
                method: "GET",
            }).then((menuItemsByCategory) => {
                commit("SET_CATEGORY_MENU_TO_STATE", menuItemsByCategory.data);
                return menuItemsByCategory.data;
            }).catch((error) => {
                return error;
            });
        },
        GET_SLIDER_MENU_FROM_API({ commit }, category) {
            return axios({
                url: "http://127.0.0.1:8000/api/menu/" + category,
                method: "GET",
            }).then((menuItemsByCategory) => {
                commit("SET_SLIDER_MENU_TO_STATE", menuItemsByCategory.data);
                return menuItemsByCategory;
            }).catch((error) => {
                return error;
            });
        },
        GET_MENU_LIST_CATEGORY({commit}) {
            return axios({
                url: "http://127.0.0.1:8000/api/menu_category",
                method: "GET"
            }).then(category => {
                commit("SET_MENU_LIST_CATEGORY", category.data)
                return category
            }).catch(error => {
                return error
            })
        },
        SEND_CATEGORY_ITEM_TO_API({commit}, name) {
            return axios({
                url: "http://127.0.0.1:8000/api/menu_category",
                method: "POST",
                data: name
            }).then(response => {
                commit("SET_MENU_LIST_CATEGORY_TO_STATE", response.data)
            }).catch(error => {
                return error
            })
        },
        SEND_MENU_ITEM_TO_API({commit}, menu) {
            return axios({
                url: "http://127.0.0.1:8000/api/menu",
                method: "POST",
                data: menu,
                header: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                commit("SET_MENU_ITEMS_TO_STATE", response.data)
            }).catch(error => {
                return error
            })
        },
        DELETE_MENU_ITEM_FROM_API({commit}, id) {
            return axios({
                url: "http://127.0.0.1:8000/api/menu/" + id,
                method: "DELETE"
            }).then(response => {
                commit("SET_MENU_ITEMS_TO_STATE", response.data)
            }).catch(error => {
                return error
            })
        },
        DELETE_MENU_CATEGORY_FROM_API({commit}, id) {
            return axios({
                url: "http://127.0.0.1:8000/api/menu_category/" + id,
                method: "DELETE"
            }).then(response => {
                commit("SET_MENU_LIST_CATEGORY_TO_STATE", response.data)
            }).catch(error => {
                return error
            })
        }
    },
};
