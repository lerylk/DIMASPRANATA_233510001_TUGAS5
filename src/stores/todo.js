// src/stores/todo.js
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(text) {
      if (text.trim() !== '') {
        this.todos.push({ text, completed: false })
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed
    }
  },
  getters: {
    incompleteCount: (state) => state.todos.filter(todo => !todo.completed).length
  }
})
