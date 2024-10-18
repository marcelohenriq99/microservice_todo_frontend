import React, { useState } from "react";

import './index.css';

function TodoCard({ task, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);

  //events
  function changeTitle(event){
    setTaskTitle(event.target.value);
  }

  function markAsDone(_) {
    console.log('markAsDone');
    onEdit(
      task.id,
      {
        ...task,
        done: !task.done
      },
    );
  }

  function editTask(_) {
    setEditing(true);
  }
  
  function updateTask(_) {
    console.log('edit');
    onEdit(
      task.id,
      {
        ...task,
        title: taskTitle,
      },
    );
    setEditing(false);
  }

  return (
    <div className="d-flex flex-row card custom-card todo-card my-1">
      <div className="form-check">
        <input
          className="form-check-input circular-checkbox"
          type="checkbox"
          defaultChecked={task.done}
          onChange={markAsDone}
          id={task.id}
        />
        <label className="form-check-label" htmlFor={task.id}>
        </label>
      </div>
      { editing ? <input className="form-control form-control-sm mx-2 w-75" type="text" value={taskTitle} onChange={changeTitle} /> : <p className="task-title"> { taskTitle } </p> }
      
      {
        editing ?
        <>
          <button className="btn btn-primary todo-actions d-flex justify-content-center align-items-center ms-auto mx-2" type="button" onClick={updateTask}>
            <i className="bi bi-check2"></i>
          </button>
          <button className="btn btn-primary todo-actions d-flex justify-content-center align-items-center" type="button" onClick={() => setEditing(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </> :
        <div className="dropdown ms-auto">
          <button className="btn btn-primary todo-actions d-flex justify-content-center align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-three-dots"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" onClick={editTask}>
                <i className="bi bi-pencil"></i>
                <span className="px-2">Edit</span>
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => onDelete(task.id)}>
                <i className="bi bi-x-lg"></i>
                <span className="px-2">Delete</span>
              </button>
            </li>
          </ul>
        </div>
      }
    </div>
  );
}

export default TodoCard;