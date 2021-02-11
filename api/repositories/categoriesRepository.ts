import { NuxtAxiosInstance } from '@nuxtjs/axios'
const resource = '/categories'
export default ($axios: NuxtAxiosInstance) => ({
  index () {
    return $axios.get(resource)
  }
})
