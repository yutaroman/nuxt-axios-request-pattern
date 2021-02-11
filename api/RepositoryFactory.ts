import categoriesRepository from '@/api/repositories/categoriesRepository'
import postsRepository from '@/api/repositories/postsRepository'
import commentsRepository from '@/api/repositories/commentsRepository'
import meRepository from '@/api/repositories/meRepository'

const repositories: { [key: string]: Function } = {
  categories: categoriesRepository,
  posts: postsRepository,
  comments: commentsRepository,
  me: meRepository
}
export const RepositoryFactory = {
  get: (name: string) => {
    return repositories[name]
  }
}
