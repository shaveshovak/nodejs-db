import axios from "axios";
import { useEffect, useState } from "react";
import TodoItem from "../todo-item/TodoItem";
import './TodoList.css';

const TodoList = () => {

    const [todoList, setTodoList] = useState([]);

    const API = 'https://jsonplaceholder.typicode.com/todos';

    // useEffect(() => {
    //     axios
    //         .get(API)
    //         .then((res) => setTodoList(res.data));
    // }, [todoList]);

    const isDoneTodo = (id) => {
        const isDoneTodoItem = todoList.find((todoItem) => todoItem.id === id);
        // isDoneTodoItem.isDone = !isDoneTodoItem.isDone;

        //console.log(isDoneTodoItem.id)

        setTodoList([...todoList]);

        console.log(isDoneTodoItem)
        console.log(todoList)
    }

    const editTodo = (id) => {
        console.log()
    }

    const deleteTodo = (id) => {

    }
    
    return (
      <ul className="todo-list">
        {
            todoList.map((todoItem) => {
                return (
                    <TodoItem 
                        key={todoItem.id} 
                        title={todoItem.title}
                        isDone={todoItem.isDone}
                        isDoneTodo={isDoneTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            })
        }
      </ul>
    );
  }
  
  export default TodoList;
  