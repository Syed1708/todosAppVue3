<script setup>
import { TodoStore } from './store/todosStore';
const todos = TodoStore();


</script>

<template>
  <div>
    <h1>Todo App</h1>
    <form @submit.prevent="todos.addTodo">
      <input class="addtask" v-model="todos.newTodo" placeholder="Add a new task" />
      <button type="submit">Add</button>
      
    </form>
    <p id="error" v-if="todos.error"  > Add a task please.. </p>
    <ul class="todolist">
      <li v-for="todo in todos.todos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ 'done': todo.done }">{{ todo.text }}</span>
        <button @click="todos.removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
  
</template>

<style scoped>

.done {
  text-decoration: line-through;
}
#error{
color: brown;
}

.addtask{
  display: inline-block;
  font-size: 20px;
  padding: 5px;
  margin: 5px;

}
.todolist{
  list-style: none;
  font-size: 15px;
  padding: 5px;
  font-weight: bold;
  
}
.todolist li span{
  margin: 10px;
}
</style>
