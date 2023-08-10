import { ListItem, Button, ListIcon } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import styles from './todo-items.module.css'

const TodoItem = ({ item, onDelete, onEdit, onDone }) => {
    return (
        <ListItem>
            <span className={styles.list_title}>
                <ListIcon as={ArrowRightIcon} />
                <span>{item}</span>
            </span>
            
            <div className={styles.btn_list}>
                <Button colorScheme='yellow' onClick={onEdit}>Edit</Button>
                <Button colorScheme='red' onClick={onDelete}>Delete</Button>
                <Button colorScheme='green' onClick={onDone}>Done</Button>
            </div>
        </ListItem>
    )
}
  
export default TodoItem
  