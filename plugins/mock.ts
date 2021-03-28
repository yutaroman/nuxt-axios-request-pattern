import MockAdapter from 'axios-mock-adapter'
import CategoriesDummy from '@/mock/categories'
import PostsDummy from '@/mock/posts'
import CommentsDummy from '@/mock/comments'
import MeDummy from '@/mock/me'

import { Context } from '@nuxt/types'

export default ({ $axios }: Context) => {
    const mock = new MockAdapter($axios, { delayResponse: 500 })
    mock.onGet('/categories').reply(200, CategoriesDummy)
    mock.onGet('/posts').reply(200, PostsDummy)
    mock.onGet('/comments').reply(200, CommentsDummy)
    mock.onGet('/me').reply(200, MeDummy)
}
