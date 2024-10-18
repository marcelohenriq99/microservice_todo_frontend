import React from "react";

import './index.css';

function TodoCard({ task }) {

  //events
  function markAsDone(_) {
    console.log('markAsDone', task);
  }
  
  function editTask(_) {
    console.log('edit');
  }
  
  function deleteTask(_) {
    console.log('delete');
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
      <p className="task-title"> { task.title } </p>

      <div className="dropdown ms-auto">
        <button className="btn btn-primary todo-actions d-flex justify-content-center align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-three-dots"></i>
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" onClick={editTask}>
              <i className="bi bi-pencil"></i>
              <span className="px-2">Editar</span>
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={deleteTask}>
              <i class="bi bi-x-lg"></i>
              <span className="px-2">Excluir</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoCard;