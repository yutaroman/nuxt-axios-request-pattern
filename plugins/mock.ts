import MockAdapter from 'axios-mock-adapter'
import PostsDummy from '@/mock/posts'
import CategoriesDummy from '@/mock/categories'

import { Context } from '@nuxt/types'

export default ({ $axios }: Context) => {
  const mock = new MockAdapter($axios, { delayResponse: 500 })
  mock.onGet('/posts').reply(200, PostsDummy)
  mock.onGet('/categories').reply(200, CategoriesDummy)
}
