import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: 'en',
    userName: null,
    searchText: null,
    selectLocation: null,
    jobList: null,
    jobDetail: null,
  },
  getters: {
    getLanguageName(state) {
      return state.language;
    },
    getUsername(state) {
      return state.userName;
    },
    getSearchText(state) {
      return state.searchText;
    },
    getSelectLocation(state) {
      return state.selectLocation;
    },
    getJobList(state) {
      return state.jobList;
    },
    getJobDetail(state) {
      return state.jobDetail;
    },
  },
  mutations: {
    ['SET_LANGUAGE'](state, language) {
      state.language = language;
    },
    ['SET_USER_NAME'](state, userName) {
      state.userName = userName;
    },
    ['SET_SEARCH_TEXT'](state, searchText) {
      state.searchText = searchText;
    },
    ['SET_SELECT_LOCATION'](state, selectLocation) {
      state.selectLocation = selectLocation;
    },
    ['SET_JOB_LIST'](state, jobList) {
      state.jobList = jobList;
    },
    ['SET_JOB_DETAIL'](state, jobDetail) {
      state.jobDetail = jobDetail;
    },
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language);
    },
    setUserName({ commit }, userName) {
      commit('SET_USER_NAME', userName);
    },
    setSearchText({ commit }, searchText) {
      commit('SET_SEARCH_TEXT', searchText);
    },
    setSelectLocation({ commit }, selectLocation) {
      commit('SET_SELECT_LOCATION', selectLocation);
    },
    setJobList({ commit }, jobList) {
      commit('SET_JOB_LIST', jobList);
    },
    setJobDetail({ commit }, jobDetail) {
      commit('SET_JOB_DETAIL', jobDetail);
    },
  },
  modules: {},
});
