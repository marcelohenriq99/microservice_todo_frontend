import React, { useState } from "react";

import TodoCard from './components/todo_card';

import './index.css';

function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Create frontend with React',
      done: false,
    },
    {
      id: 2,
      title: 'Create Auth service',
      done: true,
    },
    {
      id: 3,
      title: 'Create notification service',
      done: false,
    },
    {
      id: 4,
      title: 'Create scraping service',
      done: true,
    }
  ]);

  //events
  function editTask(taskId, taskData) {
    setTasks(tasks.map(task =>
      task.id === taskId ? { id: taskId, ...taskData } : task
    ));
    console.log(tasks);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div className="container-fluid vh-100 w-100 todo-gradient-bg d-flex flex-column justify-content-center align-items-center p-5">
      <div className="row col-12 app-title">
        <h2 className="text-white text-bold pb-5">Hello, Marcelo!</h2>
      </div>
      
      <ul className="row col-12">
        {tasks.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <TodoCard task={item} onEdit={editTask} onDelete={deleteTask} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;