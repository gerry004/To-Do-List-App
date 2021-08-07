import {v4} from 'uuid';

function ToDoModel() {
  // data
  let todos = [];

  // power
  const getTodos = () => todos; 

  const getExistingTodos = () => { 
    const existingTodos = JSON.parse(window.localStorage.getItem('g-todos'));
    todos = (existingTodos) ? existingTodos : [];
    return existingTodos;
  }

  const getCompletedTodos = () => {
    let completedTodos = []
    for (let i = 0; i < todos.length; i++) { 
        if (todos[i].isComplete) {
            completedTodos.push(todos[i]);
        }
    }
    return completedTodos;
  }

  const getIncompleteTodos = () => {
    let incompleteTodos = []
    for (let i = 0; i < todos.length; i++) { 
        if (!todos[i].isComplete) {
            incompleteTodos.push(todos[i]);
        }
    }
    return incompleteTodos;
  }

  const updateLocalStorage = () => { 
    window.localStorage.setItem('g-todos', JSON.stringify(getTodos()));
  }

  const addTodo = (description, isComplete=false) => {
    if(!description.trim()) return;
    const newTodo = {
        description: description, 
        isComplete: isComplete,
        id: v4()
    };
    todos.unshift(newTodo);
    updateLocalStorage();
  };

  const deleteTodo = (id) => {
    const todoToRemove = getTodoFromId(getTodos(), id);
    todos = todos.filter(item => removeTodo(item, todoToRemove));
    updateLocalStorage();
  };

  const removeTodo = (item, todoToRemove) => {
    return item != todoToRemove;
  }

  const completeTodo = (id) => {
    const todoToComplete = getTodoFromId(getTodos(), id);
    todoToComplete.isComplete = !todoToComplete.isComplete;
    updateLocalStorage();
  }

  const getTodoFromId = (todoList, id) => {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id == id) {
        return todoList[i]
      }
    }
  }

  const clearList = () => {
    todos = [];
    window.localStorage.clear()
  }

  //api
  return {
    addTodo,
    deleteTodo, 
    completeTodo, 
    clearList,
    getExistingTodos,
    getTodos,
    getCompletedTodos,
    getIncompleteTodos
  };
}

export default ToDoModel;