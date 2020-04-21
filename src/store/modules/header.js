const initialState = {
  menus: [
    { name: 'home', label: 'Home', icon: 'inbox', link: '#home', menuOver: false },
    { name: 'about', label: 'About', icon: 'inbox', link: '#about', menuOver: false },
    { name: 'services', label: 'Services', icon: 'inbox', link: '#services', menuOver: false },
    { name: 'portfolio', label: 'Portfolio', icon: 'inbox', link: '#portfolio', menuOver: false },
    { name: 'blog', label: 'Blog', icon: 'inbox', link: '#blog', menuOver: false },
    { name: 'contact', label: 'Contact', icon: 'inbox', link: '#contact', menuOver: false }
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
    GET_BLOG: (state) => {
      return state.menus[4].name
    },
    GET_CONTACT: (state) => {
      return state.menus[5].name
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
