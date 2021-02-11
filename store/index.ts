import { getterTree, mutationTree, actionTree, getAccessorType } from 'typed-vuex'
// サブモジュール群
import * as me from '~/store/api/me'

export const strict = true

export const state = () => ({})
export const getters = getterTree(state, {})
export const mutations = mutationTree(state, {})
export const actions = actionTree({ state }, {})
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    api: {
      modules: {
        me
      }
    }
  }
})
