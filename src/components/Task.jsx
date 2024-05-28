/* eslint-disable react/prop-types */
import {useState} from 'react';
import Checkboxes from './Checkbox.jsx'

export default function Task({name, done, onToggle, onDelete, onRename}) {
  const [editMode, setEdit] = useState(false);

    return (
    <div className ={'task ' + (done?'done':'')}>
        <Checkboxes checked={done} onClick={() => onToggle(!done)}/>
        {!editMode &&(
          <div className='task-name' onClick={()=> setEdit(prev =>!prev)}>
            <span >{name}</span>
          </div>
        )}
        {editMode &&(
          <form onSubmit={(ev => {ev.preventDefault();setEdit(false)})}>
            <input type="text" value={name} 
              onChange={ev => onRename(ev.target.value)}/>
          </form>
        )}
        <button className='trash-icon' onClick={onDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
        </button>
      </div>
      )
}
