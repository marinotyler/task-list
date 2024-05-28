/* eslint-disable react/prop-types */
import {useState} from 'react'

export default function Todoform({onAdd}) {
  const [task, setTask] = useState('');
  function handleSubmit(ev){
    ev.preventDefault();
    onAdd(task);
    setTask('');

  }
  return (
    <>
      <form className='todo-form' onSubmit={ ev => handleSubmit(ev)}>
        <input type='text' value={task} onChange={ev=>setTask(ev.target.value)} placeholder='Enter a task'/>
        <button>Add</button>
      </form>
    </>
  )
}