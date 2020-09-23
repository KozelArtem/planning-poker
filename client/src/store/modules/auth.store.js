import { login, logout } from '../../api/auth';
import {
  AUTH_SET_LOADING,
  AUTH_SET_TOKEN,
  AUTH_SET_USER_DATA,
  AUTH_RESET_USER_DATA,
} from '../mutationTypes/auth';

const initialState = () => ({
  user: {},
  token: localStorage.getItem('token'),
  loading: false,
});

const localState = initialState();

const getters = {
  isAuth: (state) => !!state.token,
};

const actions = {
  async login({ commit }, { email, password }) {
    commit(AUTH_SET_LOADING, true);

    try {
      const response = await login(email, password);

      if (response) {
        commit(AUTH_SET_TOKEN, response.data.token);
        commit(AUTH_SET_USER_DATA, response.data.user);
      }

      commit(AUTH_SET_LOADING, false);
    } catch (err) {
      console.log(err, '--->err');
    }
  },

  async logout({ commit }) {
    commit(AUTH_SET_LOADING, true);
    try {
      await logout();
      commit(AUTH_RESET_USER_DATA);
      commit(AUTH_SET_LOADING, false);
    } catch (err) {
      console.log(err, '--->err');
    }
  },
};

const mutations = {
  [AUTH_SET_USER_DATA](state, payload) {
    state.user = payload;
  },
  [AUTH_SET_TOKEN](state, payload) {
    const token = `Bearer ${payload}`;
    localStorage.setItem('token', token);
    state.token = token;
  },
  [AUTH_RESET_USER_DATA](state) {
    localStorage.removeItem('token');
    state.user = {};
    state.token = null;
  },
  [AUTH_SET_LOADING](state, payload) {
    state.loading = payload;
  },
};

export default {
  namespaced: true,
  state: localState,
  getters,
  actions,
  mutations,
};
