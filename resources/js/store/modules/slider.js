export default {
    state: {
        sliderItems: [],
        currentSlideIndex: 0,
    },
    getters: {
        SLIDER_ITEMS(state) {
            return state.sliderItems
        },
        CURRENT_SLIDE_INDEX(state) {
            return state.currentSlideIndex
        }
    },
    mutations: {
        NEXT_SLIDE: (state) => {
            if (state.sliderItems.length === state.currentSlideIndex) state.currentSlideIndex = 0
            state.currentSlideIndex++

            // todo: доделать слайдер
        },
        PREV_SLIDE: (state) => {
            if (state.currentSlideIndex <= 0) state.currentSlideIndex = state.sliderItems.length
            state.currentSlideIndex--
            //todo: доделать слайдер
        },

        SET_ITEMS_TO_STATE: (state, sliderItems) => state.sliderItems = sliderItems
    },
    actions: {
        GET_NEXT_SLIDE({commit}) {
            commit("NEXT_SLIDE")
        },
        GET_PREV_SLIDE() {
            commit("PREV_SLIDE")
        },
        GET_ITEMS_FROM_API({commit}) {
            return axios({
                url: 'http://127.0.0.1:8000/api/home',
                method: "GET",
            }).then(items => {
                commit('SET_ITEMS_TO_STATE', items.data)
                return items
            }).catch(error => {
                return error;
            })
        }
    }
}
