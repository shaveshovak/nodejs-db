import axios from "axios";
import { useState } from "react";
import './AddTodo.css';

const AddTodo = () => {
    const [student, setStudent] = useState({
        firstName: '',
        age: 0,
        email: '',
        lastName: '',
    });

    const api_url = 'http://localhost:5300/api/students';

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value || '' });
    };

    const onSubmitForm = async (e) =>{
        e.preventDefault();
        try {
            // axios 
            axios.post(api_url, {
                name: student.firstName,
                lastname: student.lastName,
                email: student.email,
                age: student.age,
            }).then((res) => {
                setStudent({
                    firstName: '',
                    lastName: '',
                    age: 0,
                    email: '',
                });
            });
        } catch(err) {
            console.log(err.message);
        }   
    };

    return (
      <form onSubmit={onSubmitForm} className='add-form'>
        <input 
            type='text' 
            placeholder='Add a first name' 
            value={student.firstName} 
            name='firstName'
            onChange={handleChange} 
        />
        <input 
            type='text' 
            placeholder='Add a last name' 
            value={student.lastName} 
            name='lastName'
            onChange={handleChange} 
        />
        <input 
            type='text' 
            placeholder='Add an email' 
            name='email'
            value={student.email} 
            onChange={handleChange} 
        />
        <input 
            type='number' 
            placeholder='Add an age' 
            value={student.age} 
            name='age'
            onChange={handleChange} 
        />
        <button onClick={onSubmitForm}>Add</button>
      </form>
    );
}
  
export default AddTodo;
  