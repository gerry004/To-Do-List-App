function TodoModel() {

    // data space
    let todos = [];

    // power space

/* 
this was meant for data consistency, but could my addItem function work too?
    
    const createItem = (data) => {
        ValidityState(data);
        return {
            startTime: '',
            endTime: '',
            description: '',
            isComplete: false,
            isPending: false
        };
    }
*/

    const addItem = (description, isComplete=false) => {
        newTodo = { 
            description: description, 
            isComplete: isComplete
        }
        todos.unshift(newTodo);
        updateLocalStorage();
    }

    const deleteItem = (index) => {
        todos.splice(index, 1);
        //delete array[index] leave undefined, why?
        updateLocalStorage();
    }

    const updateItem = (index, newDescription) => {
        todos[index].description = newDescription;
        updateLocalStorage();
    }

    const completeItem = (index) => {
        todos[index].isComplete = true;
        updateLocalStorage();
    }

    const clearList = () => {
        todos = [];
        window.localStorage.clear()
    }

    const updateLocalStorage = () => { 
        window.localStorage.setItem('g-todos', JSON.stringify(getTodos()));
    }

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

    // ? showTodos etc. render html(views), should they be in the model's power space?  
    const showTodos = (filterByComplete=false) => { 
        document.getElementById('gtd-app').innerHTML = "";
        const todosToShow = (filterByComplete === true) ? getCompletedTodos(): getTodos();
        const list = createListOfTodos(todosToShow);
        const root = document.getElementById("gtd-app");
        root.appendChild(list);
    }

    const createListOfTodos = (array) => {
        const list = document.createElement('ul');
        for (let i = 0; i < array.length; i++) {
            list.appendChild(createListItem(array[i].description));
        }
        return list;
    }

    const createListItem = (todoItem) => { 
        const item = document.createElement('li'); 
        item.appendChild(document.createTextNode(todoItem));
        return item;
    }

    // api space
    return {
        addItem, 
        deleteItem,
        updateItem,
        completeItem,
        clearList,
        showTodos,
        getExistingTodos
    }
}

const t = TodoModel()

t.getExistingTodos()

t.addItem("todo test 1")
t.addItem("todo test 2")
t.addItem("todo test 3")
t.addItem("todo test 4")
t.addItem("todo test 5")
t.addItem("todo test 6")

t.deleteItem(2)

t.completeItem(4)

t.showTodos()


/*
const fetchExistingTodos = () => {
        const api = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(`${api}`).then(res => {
        setTodos(res.data);
        });
    }
*/
