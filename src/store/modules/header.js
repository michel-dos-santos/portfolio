const initialState = {
  menus: [
    { name: 'home', label: 'Início', icon: 'home', link: '#home' },
    { name: 'about', label: 'Sobre', icon: 'fas fa-address-card', link: '#about' },
    { name: 'services', label: 'Serviços', icon: 'fas fa-user-tie', link: '#services' },
    { name: 'portfolio', label: 'Portfolio', icon: 'fas fa-object-group', link: '#portfolio' },
    // { name: 'blog', label: 'Blog', icon: 'inbox', link: '#blog' },
    { name: 'contact', label: 'Contato', icon: 'fas fa-phone', link: '#contact' }
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
