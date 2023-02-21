import './App.css';
import React, {useEffect,useState} from 'react';//takes sate converts to object
import Typography from "@material-ui/core/Typography";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
const [todos, setTodos] = useState([]);

useEffect(() => {
  // fires when app component mounts to the DOM
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (storageTodos) {
    setTodos(storageTodos);
  }
}, []);

// useEffect(() => {
//   // fires when todos array gets updated
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
// }, [todos]);

function addTodo(todo) {
  // adds new todo to beginning of todos array
  setTodos([todo, ...todos]);//the new todo in begin and old todo at the end
}

function toggleComplete(id) {
  setTodos(
    todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  );
}

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id));
}


  return (
    <div className="App">
      <header className="App-header">
      <Typography style={{ padding: 16 }} variant="h1">
        ToDo List:
      </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />

      </header>
    </div>
  );
}

export default App;
