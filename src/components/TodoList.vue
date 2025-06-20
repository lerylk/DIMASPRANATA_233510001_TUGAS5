<template>
  <div class="todo-unique-container">
    <h1 class="todo-title">✨ My Unique Todo List</h1>
    <form @submit.prevent="add" class="todo-form">
      <input
        v-model="newTodo"
        class="todo-input"
        placeholder="Apa yang ingin kamu lakukan hari ini?"
        autocomplete="off"
      />
      <button type="submit" class="todo-add-btn">Tambah</button>
    </form>
    <ul class="todo-list">
      <li
        v-for="(todo, idx) in todoStore.todos"
        :key="idx"
        :class="['todo-item', { completed: todo.completed }]"
      >
        <label class="custom-checkbox">
          <input
            type="checkbox"
            :checked="todo.completed"
            @change="todoStore.toggleTodo(idx)"
          />
          <span class="checkmark"></span>
        </label>
        <span class="todo-text">{{ todo.text }}</span>
        <button class="todo-delete-btn" @click="todoStore.removeTodo(idx)">
          <svg width="18" height="18" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9" fill="#ffeaea"/>
            <line x1="7" y1="7" x2="13" y2="13" stroke="#ff5e5e" stroke-width="2"/>
            <line x1="13" y1="7" x2="7" y2="13" stroke="#ff5e5e" stroke-width="2"/>
          </svg>
        </button>
      </li>
    </ul>
    <div class="todo-footer">
      <span>
        <strong>{{ todoStore.incompleteCount }}</strong> tugas belum selesai
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todo'

const todoStore = useTodoStore()
const newTodo = ref('')

function add() {
  if (newTodo.value.trim() !== '') {
    todoStore.addTodo(newTodo.value)
    newTodo.value = ''
  }
}
</script>

<style scoped>
.todo-unique-container {
  max-width: 420px;
  margin: 48px auto;
  background: linear-gradient(135deg, #e3f0ff 0%, #fceabb 100%);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(94,139,255,0.09);
  padding: 36px 28px 28px 28px;
  font-family: 'Quicksand', 'Segoe UI', sans-serif;
}

.todo-title {
  text-align: center;
  color: #6a5acd;
  margin-bottom: 28px;
  font-size: 2.1em;
  letter-spacing: 1.5px;
  font-weight: 700;
}

.todo-form {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
}

.todo-input {
  flex: 1;
  padding: 12px 16px;
  border: 1.5px solid #c5bfff;
  border-radius: 9px;
  font-size: 1.08em;
  outline: none;
  background: #fff;
  transition: border 0.2s;
  box-shadow: 0 1px 3px rgba(106,90,205,0.05);
}

.todo-input:focus {
  border-color: #6a5acd;
}

.todo-add-btn {
  background: linear-gradient(90deg, #6a5acd 60%, #5e8bff 100%);
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 9px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
  box-shadow: 0 2px 8px rgba(106,90,205,0.08);
  transition: background 0.2s, transform 0.1s;
}

.todo-add-btn:hover {
  background: linear-gradient(90deg, #5e8bff 60%, #6a5acd 100%);
  transform: translateY(-2px) scale(1.04);
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.97);
  border-radius: 10px;
  margin-bottom: 14px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(106,90,205,0.03);
  transition: background 0.2s;
  position: relative;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #b7b7b7;
  font-style: italic;
  opacity: 0.7;
}

.custom-checkbox {
  position: relative;
  margin-right: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.custom-checkbox input {
  opacity: 0;
  width: 0;
  height: 0;
}

.checkmark {
  width: 22px;
  height: 22px;
  background: #f3f3ff;
  border: 2px solid #bcbcff;
  border-radius: 7px;
  display: inline-block;
  position: relative;
  transition: background 0.2s, border 0.2s;
}

.custom-checkbox input:checked + .checkmark {
  background: linear-gradient(135deg, #6a5acd 60%, #5e8bff 100%);
  border-color: #6a5acd;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked + .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 6px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.todo-text {
  flex: 1;
  font-size: 1.06em;
  margin-right: 12px;
  color: #4a4a4a;
  transition: color 0.2s;
}

.todo-delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 2px 2px;
  transition: background 0.2s, transform 0.1s;
  margin-left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-delete-btn:hover {
  background: #ffeaea;
  transform: scale(1.08);
}

.todo-footer {
  text-align: center;
  margin-top: 24px;
  color: #6a5acd;
  font-size: 1.05em;
  letter-spacing: 0.5px;
}
</style>
