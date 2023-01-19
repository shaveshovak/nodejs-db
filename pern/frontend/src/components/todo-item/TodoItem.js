import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faEdit, faTrash, faAdd, faCheck
} from "@fortawesome/free-solid-svg-icons";
import './TodoItem.css';

library.add(faEdit, faTrash, faAdd);

const TodoItem = ({ 
    title, 
    deleteTodo, 
    editTodo, 
    isDoneTodo, 
    isDone, 
    id
}) => {
    return (
      <li className="todo-item">
        <span 
            className={`todo-item-item ${(isDone ? 'higlighted' : '')}`}
        >{title}</span>
        <span className="action-btns">
            <button 
                className="delete-btn"
                onClick={() => deleteTodo(id)}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button 
                className="edit-btn"
                onClick={() => editTodo(id)}
            >
                <FontAwesomeIcon icon={faEdit} />
            </button>
            <button 
                className="check-btn"
                onClick={() => isDoneTodo(id)}
            >
                <FontAwesomeIcon icon={faCheck} />
            </button>
        </span>
      </li>
    );
}
  
export default TodoItem;
  