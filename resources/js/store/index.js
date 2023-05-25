import { createStore } from "vuex";
import menu from "./modules/menu";
import order from "./modules/order";
import auth from "./modules/auth";

export default createStore({
    modules: {
        menu,
        order,
        auth
    },
});
