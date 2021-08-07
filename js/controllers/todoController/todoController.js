function TodoController(models, views) {
  const { todoModel } = models;
  const { todoView } = views;

  const addBtn = document.querySelector('.gtd-ctrl__add-btn');
  const clearBtn = document.querySelector('.gtd-ctrl__clear-btn');
  const todoInput = document.querySelector('.gtd-ctrl__todo-input');
  const deleteButtons = document.getElementsByClassName('gtd-ctrl__delete-btn');
  const doneButtons = document.getElementsByClassName('gtd-ctrl__done-btn');
  const showCompleteBtn = document.querySelector('.gtd-ctrl__show-completed-btn');
  const showIncompleteBtn = document.querySelector('.gtd-ctrl__show-incomplete-btn');

  window.onload = () => {
    todoView.showTodos(todoModel.getExistingTodos());
    createEventListeners(deleteButtons, deleteTodo);
    createEventListeners(doneButtons, completeTodo);
  }

  const createEventListeners = (elements, functionName) => {
    for (let i=0; i < elements.length; i++) {
      elements[i].addEventListener('click', functionName);
    };
  }

  addBtn.onclick = () => {
    const description = todoInput.value;
    todoModel.addTodo(description);
    todoView.showTodos(todoModel.getTodos());
    todoView.clearInputBox();
    createEventListeners(deleteButtons, deleteTodo);
    createEventListeners(doneButtons, completeTodo);
  }

  clearBtn.onclick = () => {
    todoModel.clearList();
    todoView.clearList();
    todoView.clearInputBox();
  }

  const deleteTodo = (e) => {
    const todoId = e.target.id;
    todoModel.deleteTodo(todoId);
    todoView.deleteTodo(todoId);
  }
  
  const completeTodo = (e) => {
    const todoId = e.target.id;
    todoModel.completeTodo(todoId);
    todoView.completeTodo(todoId);
  }

  showCompleteBtn.onclick = () => {
    todoView.showTodos(todoModel.getCompletedTodos());
  }

  showIncompleteBtn.onclick = () => {
    todoView.showTodos(todoModel.getIncompleteTodos());
  }
}

export default TodoController;
