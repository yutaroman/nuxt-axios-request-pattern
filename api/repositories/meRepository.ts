import { NuxtAxiosInstance } from '@nuxtjs/axios'
const resource = '/me'
export default ($axios: NuxtAxiosInstance) => ({
    show () {
        return $axios.get(resource)
    }
})
