import { List } from '@chakra-ui/react'
import TodoItem from './TodoItem'
import styles from './todo-items.module.css'

const TodoItems = () => {

    const onEdit = () => { }

    const onDelete = () => { }

    const onDone = () => { }

    return (
        <List className={styles.list}>
            <TodoItem 
                item={'Title'} 
                onDelete={onDelete}
                onEdit={onEdit}
                onDone={onDone}
            />
        </List>
    )
}
  
export default TodoItems
  