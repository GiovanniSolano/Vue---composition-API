import { createStore } from 'vuex'
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar piedras', completed: false },
      { id: '2', text: 'Piedra del alma ', completed: true },
      { id: '3', text: 'Piedra del poder', completed: true },
      { id: '4', text: 'Piedra de realidad', completed: false },
      { id: '5', text: 'Conseguir nuevos secuases competentes', completed: false },
    ]
  },
  mutations: {

    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex(todo => todo.id === id)
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },

    createTodo(state, text = "") {

      if(text.length <= 1) return

      state.todos.push({
        id: uuidv4(),
        completed: false,
        text
      })

    }

  },
  actions: {
  },
  getters: {
    pendingTodos(state, getters, rooState) {
      return state.todos.filter(todo => !todo.completed)
    },

    allTodos(state, getters, rooState) {
      return state.todos;
    },

    completedTodos(state, getters, rooState) {
      return state.todos.filter(todo => todo.completed);
    },

    getTodosByTab: ( _, getters) => (tab) => {
      switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }
    }
  },
  modules: {
  }
})
