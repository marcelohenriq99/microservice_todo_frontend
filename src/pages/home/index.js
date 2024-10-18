import React from "react";

import TodoCard from './components/todo_card';

import './index.css';

const tasks = [
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
];

function Home() {
  return (
    <div className="container-fluid vh-100 w-100 home-bg d-flex flex-column justify-content-center align-items-center p-5">
      <div className="row col-12 app-title">
        <h2 className="text-white text-bold pb-5">Todo App</h2>
      </div>
      
      <ul className="row col-12">
        {tasks.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <TodoCard task={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;