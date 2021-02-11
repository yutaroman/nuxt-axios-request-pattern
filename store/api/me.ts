import { getterTree, mutationTree, actionTree } from 'typed-vuex'
const TARGET_REPOSITORY = 'me'

export const state = () => ({
  userDetail: {} as any
})

export const getters = getterTree(state, {
  userDetailData: state => state.userDetail.data
})

export const mutations = mutationTree(state, {
  mutateDetail: (state, payload) => {
    state.userDetail = payload
  }
})

export const actions = actionTree({ state }, {
  async fetchDetail ({ commit }): Promise<void> {
    try {
      const response = await (this as any).$repositories(TARGET_REPOSITORY).show()
      commit('mutateDetail', response.data)
    } catch (error) {
      console.log(error.response)
      throw error
    }
  }
})
