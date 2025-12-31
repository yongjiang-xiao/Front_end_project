import { createStore } from 'vuex'

export default createStore({
  state: {
    // 用户信息
    user: {
      isLoggedIn: false,
      name: '',
      studentId: '',
      avatar: ''
    },
    // 全局加载状态
    loading: false,
    // 通知消息
    notifications: []
  },
  getters: {
    isLoggedIn: state => state.user.isLoggedIn,
    userName: state => state.user.name,
    notifications: state => state.notifications
  },
  mutations: {
    SET_USER(state, user) {
      state.user = { ...state.user, ...user }
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    ADD_NOTIFICATION(state, notification) {
      state.notifications.push({
        id: Date.now(),
        ...notification
      })
    },
    REMOVE_NOTIFICATION(state, id) {
      state.notifications = state.notifications.filter(n => n.id !== id)
    }
  },
  actions: {
    login({ commit }, userInfo) {
      commit('SET_USER', {
        isLoggedIn: true,
        ...userInfo
      })
    },
    logout({ commit }) {
      commit('SET_USER', {
        isLoggedIn: false,
        name: '',
        studentId: '',
        avatar: ''
      })
    },
    showNotification({ commit }, notification) {
      commit('ADD_NOTIFICATION', notification)
      // 5秒后自动移除通知
      setTimeout(() => {
        commit('REMOVE_NOTIFICATION', notification.id || Date.now())
      }, 5000)
    },
    setLoading({ commit }, loading) {
      commit('SET_LOADING', loading)
    }
  },
  modules: {
    // 可以在这里添加其他模块
  }
})