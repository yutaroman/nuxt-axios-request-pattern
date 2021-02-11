import categoriesRepository from '@/api/repositories/categoriesRepository'
import postsRepository from '@/api/repositories/postsRepository'
import commentsRepository from '@/api/repositories/commentsRepository'

const repositories: { [key: string]: Function } = {
  categories: categoriesRepository,
  posts: postsRepository,
  comments: commentsRepository
}
export const RepositoryFactory = {
  get: (name: string) => {
    return repositories[name]
  }
}
