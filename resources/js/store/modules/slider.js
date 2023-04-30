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
        }
    },
    actions: {
        GET_NEXT_SLIDE({commit}) {
            commit("NEXT_SLIDE")
        },
        GET_PREV_SLIDE({commit}) {
            commit("PREV_SLIDE")
        }
    }
}