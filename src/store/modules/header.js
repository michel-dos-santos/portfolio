const initialState = {
  menus: [
    { name: 'home', label: 'Home', icon: 'inbox', link: '#home' },
    { name: 'about', label: 'About', icon: 'inbox', link: '#about' },
    { name: 'services', label: 'Services', icon: 'inbox', link: '#services' },
    { name: 'portfolio', label: 'Portfolio', icon: 'inbox', link: '#portfolio' },
    // { name: 'blog', label: 'Blog', icon: 'inbox', link: '#blog' },
    { name: 'contact', label: 'Contact', icon: 'inbox', link: '#contact' }
  ],
  miniState: true
}
const state = Object.assign({}, initialState)

export default {
  state,
  getters: {
    GET_HOME: (state) => {
      return state.menus[0].name
    },
    GET_ABOUT: (state) => {
      return state.menus[1].name
    },
    GET_SERVICES: (state) => {
      return state.menus[2].name
    },
    GET_PORTFOLIO: (state) => {
      return state.menus[3].name
    },
    // GET_BLOG: (state) => {
    // return state.menus[4].name
    // },
    GET_CONTACT: (state) => {
      return state.menus[4].name
    }
  },
  mutations: {
    SET_MINI_STATE: (state, payload) => {
      state.miniState = payload
    }
  },
  actions: {
  }
}
