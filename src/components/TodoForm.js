import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value); // Adding values from To-do wrapper to to-do form.
        setValue(""); // Setting the value to empty stringafter submitting form.

        //console.log(value); ----- Checking if the value is getting captured.
    }
  return (
    <form className='TodoForm' onSubmit = {handleSubmit}>
        <input type='text' className='todo-input' value={value}
        placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} />

        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
