import { createStore } from "vuex";
import menu from "./modules/menu";
import order from "./modules/order";

export default createStore({
    modules: {
        menu,
        order
    },
});
