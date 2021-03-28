import { NuxtAxiosInstance } from '@nuxtjs/axios'
const resource = '/posts'
export default ($axios: NuxtAxiosInstance) => ({
    index () {
        return $axios.get(resource)
    }
})
