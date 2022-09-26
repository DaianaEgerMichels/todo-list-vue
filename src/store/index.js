import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
    storeTodo(state, payload) {
      state.todos.push(payload);
    },
  },
  actions: {
    //retorna promises
    getTodos({ commit }) {
      return axios.get("http://localhost:3000/todos").then((response) => {
        commit("storeTodos", response.data);
      });
    },

    addTodo({ commit }, data) {
      return axios.post("http://localhost:3000/todos", data).then((response) => {
        commit("storeTodo", response.data);
      });
    },
  },
  modules: {},
});
