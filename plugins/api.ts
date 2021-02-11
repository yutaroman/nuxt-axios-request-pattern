import { Plugin } from '@nuxt/types'
import { RepositoryFactory } from '@/api/RepositoryFactory'
declare module 'vue/types/vue' {
  interface Vue {
    $repositories(name: string): Function
  }
}
const repositories: Plugin = ({ app }, inject) => {
  inject('repositories', (name: string) => {
    return RepositoryFactory.get(name)(app.$axios)
  })
}
export default repositories
