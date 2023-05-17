export default {
    methods: {
        getImage: filename => {
            return import.meta.env.VITE_APP_IMAGE_PATH + filename
        }
    }
}
