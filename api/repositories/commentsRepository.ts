import { NuxtAxiosInstance } from '@nuxtjs/axios'
const resource = '/comments'
export default ($axios: NuxtAxiosInstance) => ({
    index () {
        return $axios.get(resource)
    }
})
