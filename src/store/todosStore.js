import { defineStore } from 'pinia';
import {ref, reactive} from 'vue'

const TodoStore = defineStore('todo', () => {
  
    const newTodo = ref('');
    const error = ref(false);
    const todos = ref([]);
  
    const addTodo = () => {
      
        if (newTodo.value.trim() !== '') {
          error.value = false;
            todos.value.push({
                id: Date.now(),
                text: newTodo.value,
                done: false,
                 
              });
        }else{
            error.value = true;
        }

      newTodo.value = ''; // Clear the input field 
    //   error.value = '';
    };
  
  

  const removeTodo = (todoId) => {
    const index = todos.value.findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
      todos.value.splice(index, 1);
    }
  };
  
  const toggleTodoStatus = (todoId) => {
    const todo = todos.value.find((todo) => todo.id === todoId);
    if (todo) {
      todo.done = !todo.done;
    }
  };
  
  return {
    newTodo,
    todos,
    error,
    addTodo,
    removeTodo,
    toggleTodoStatus,
  };
});

export { TodoStore }