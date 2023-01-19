import AddTodo from "./components/todo-add/AddTodo";
import TodoList from "./components/todo-list/TodoList";

const App = () => {
  return (
    <div className="todo-app">
      <AddTodo />
      <TodoList  />
    </div>
  );
}

export default App;
