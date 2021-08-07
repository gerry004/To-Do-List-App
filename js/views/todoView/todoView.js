function TodoView() {

  const todoList = document.querySelector('.gtd-view__todo-list');

  const showTodos = (todos) => {
    todoList.innerHTML = "";
    if (todos) {
      for (let i = 0; i < todos.length; i++) {
          todoList.appendChild(createListItem(todos[i]));
      }
    }
  }

  const deleteTodo = (todoId) => {
    document.getElementById(todoId).remove();
  }

  const completeTodo = (todoId) => {
    const listItem = document.getElementById(todoId);
    listItem.style.textDecoration = (listItem.style.textDecoration=='line-through') ? '' : 'line-through';
  }

  const clearList = () => {
    todoList.innerHTML = "";
  }

  const createListItem = (todo) => { 
    const listItem = document.createElement('li'); 
    listItem.appendChild(createListTextElement(todo.description));
    listItem.appendChild(createButtonElement('Delete', 'gtd-ctrl__delete-btn list-item-actions red-bg', todo.id));
    listItem.appendChild(createButtonElement('Done', 'gtd-ctrl__done-btn green-bg', todo.id));
    listItem.style.textDecoration = (todo.isComplete) ? 'line-through' : '';
    setAttribute(listItem, 'id', todo.id);
    setAttribute(listItem, 'class', 'list-item');
    return listItem;
  }

  const createListTextElement = (todoDescription) => {
    const textElement = document.createElement('p');
    textElement.innerHTML = todoDescription; 
    return textElement;
  }

  const createButtonElement = (label, className, id) => {
    const btn = document.createElement('button');
    btn.innerHTML = label;
    setAttribute(btn, 'class', className);
    setAttribute(btn, 'id', id);
    return btn;
  }
  
  const setAttribute = (element, attribute, value) => {
    const att = document.createAttribute(attribute);
    att.value = value;
    element.setAttributeNode(att);
  }

  return {
    showTodos,
    clearList,
    completeTodo,
    deleteTodo
  };
}

export default TodoView;
