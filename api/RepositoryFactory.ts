import categoriesRepository from '@/api/repositories/categoriesRepository'
import postsRepository from '@/api/repositories/postsRepository'

const repositories: { [key: string]: Function } = {
  categories: categoriesRepository,
  posts: postsRepository
}
export const RepositoryFactory = {
  get: (name: string) => {
    return repositories[name]
  }
}
