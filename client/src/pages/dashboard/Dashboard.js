import React, { useEffect, useState } from 'react'
import { getDashboardData, handleCreate, handleDelete, handleUpdate, handleCheck } from './DashboardScripts';

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(0);

  const reload = () => { getDashboardData(setTasks, setTaskCount) };
  useEffect(() => { getDashboardData(setTasks, setTaskCount) }, []);

  return (
    <div className='dashboard'>
      <p>Welcome {sessionStorage.getItem("email")}, you have {taskCount} tasks!</p>
      <input className='dashboard-search' placeholder='Search for task' onChange={(event) => {
        setSearch(event.target.value)
      }} />
      <h2>Tasks pending</h2>
      <button className='task-create' onClick={() => handleCreate(reload)}>Create a Task</button>
      {tasks
        .filter(task => {
          if (!task[1].checked) {
            if (search === "") {
              return task;
            }
            else if (
              task[1].name
                .toLowerCase()
                .includes(search.toLowerCase())
            ) {
              return task;
            }
          }
        })
        .map((task) =>
          <div className='task' onClick={() => { handleCheck(task[0], !task[1].checked, reload) }} key={task[0]}>
            <span>{task[1].name}</span>
            <button className='task-edit' onClick={() => handleUpdate(task[0], task[1].name, reload)}>Update</button>
            <button className='task-delete' onClick={() => handleDelete(task[0], reload)}>Delete</button>
          </div>)}
      <h2>Tasks completed</h2>
      {tasks
        .filter(task => {
          if (task[1].checked) {
            if (search === "") {
              return task;
            }
            else if (
              task[1].name
                .toLowerCase()
                .includes(search.toLowerCase())
            ) {
              return task;
            }
          }
        })
        .map((task) =>
          <div className='task' onClick={() => { handleCheck(task[0], !task[1].checked, reload) }} key={task[0]}>
            <span>{task[1].name}</span>
            <button className='task-edit' onClick={() => handleUpdate(task[0], task[1].name, reload)}>Update</button>
            <button className='task-delete' onClick={() => handleDelete(task[0], reload)}>Delete</button>
          </div>)}
    </div>
  )
}

export default Dashboard