import React, {useState} from 'react'

export const EditToDoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id); // Editing values from To-do wrapper to edit-to-do form.
        setValue(""); // Setting the value to empty stringafter submitting form.

        //console.log(value); ----- Checking if the value is getting captured.
    }
  return (
    <form className='TodoForm' onSubmit = {handleSubmit}>
        <input type='text' className='todo-input' value={value}
        placeholder='Update Task' onChange={(e) => setValue(e.target.value)} />

        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
