import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm.jsx'
import Task from './components/Task.jsx'

function App() {
  const [tasks,setTask] = useState([]);
  
  useEffect(() => {
    if(tasks.length ===0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks] )

  useEffect(() => {
  
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    setTask(tasks);
  }, []);

  function addTask(name){
    setTask(prev =>{
      return [...prev, {name:name, done: false}];
    });
  }

  function updateTaskDone(taskIndex, taskDone){
    setTask(prev =>{
      const newTasks = [...prev];
      newTasks[taskIndex].done = taskDone;
      return newTasks;
    })
  }

  function removeTask(removeIndex){
    setTask(prev=>{
      return prev.filter((taskObject, index) => index !== removeIndex);
    })
  }

  function renameTask(index, newName){
    setTask (prev =>{
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    })
  }
  const numberTasksDone = tasks.filter(task => task.done).length;
  const numberTasksTotal = tasks.length;
  return (
    <div className='todo-app'>
      <h1>{numberTasksDone} of {numberTasksTotal} tasks Finished</h1>
      <TodoForm onAdd={addTask}/>
        {tasks.map((task, index) =>(
          <Task key ={index}{...task}
          onRename={newName => renameTask(index, newName)}
          onDelete={()=>removeTask(index)}
          onToggle={done=> updateTaskDone(index, done)}/>
        ))}
    </div>
  )
}

export default App
 