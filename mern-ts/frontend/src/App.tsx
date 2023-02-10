import { useEffect, useState } from 'react';
import axios from 'axios';

export interface todoItem {
  id: string,
  item: string
}

const App = () => {
  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState<any[]>([]);
  const [isUpdating, setIsUpdating] = useState('');
  const [updateItemText, setUpdateItemText] = useState('');

  const API_URL = 'http://localhost:8081/api/items';

  const handleChange = (e: any) => {
    setItemText(e.target.value)
  }

  const handleUpdateChange = (e: any) => {
    setUpdateItemText(e.target.value)
  }

  const addItem = async (e: any) => {
    e.preventDefault();
    try {
      const result = await axios.post(API_URL, {
        item: itemText
      });
      setItems(prev => [...prev, result.data]);
      setItemText('');
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const result = await axios.get(API_URL);
        setItems(result.data);
      } catch(err) {
        console.log(err);
      }
    }
    getItemsList();
  }, []);

  const deleteItem = async (id: string) => {
    try { 
      const result = await axios.delete(`${API_URL}/${id}`);
      const newListItems = items.filter(item => item._id !== id);
      setItems(newListItems)
    } catch(err) {
      console.log(err)
    }
  }

  const editItem = async (e: any) => {
    e.preventDefault();

    try {
      const result = await axios.patch(`${API_URL}/${isUpdating}`, {
        item: updateItemText
      });
      const updateItemIndex = items.findIndex(item => item._id === isUpdating);
      const updateItem = items[updateItemIndex].item = updateItemText;
      setUpdateItemText('');
      setIsUpdating('');  
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='mern-ts'>
      <form className="mern-form" onSubmit={e => {addItem(e)}}>
        <input 
          type='text' 
          placeholder='Add Todo Item' 
          onChange={handleChange}
          value={itemText}
        />
        <button type='submit'>Add</button>
      </form>

      <ul className='todo-items'>
        {
          items.map(todo => {
            return (
              <li className='todo-item' key={todo._id}>
                {
                  isUpdating === todo._id 
                  ? 
                    <form className='update-form'>
                      <input 
                        type='text' 
                        placeholder='New Item' 
                        className='update-new-input' 
                        onChange={handleUpdateChange} 
                        value={updateItemText} 
                      />
                      <button 
                        type='submit' 
                        className='update-new-btn'
                        onClick={(e) => editItem(e)}
                      >Update</button>
                    </form> 
                  : <>
                      <span className='item'>{todo.item}</span>
                      <span className='btns'>
                        <button 
                          className='update-btn' 
                          onClick={() => setIsUpdating(todo._id)}
                        >Edit</button>
                        <button 
                          className='delete-btn' 
                          onClick={() => deleteItem(todo._id)}
                        >Delete</button>
                      </span>
                    </>
                }
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
