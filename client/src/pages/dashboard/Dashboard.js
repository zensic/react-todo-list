import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../layout/Layout';
import { getDashboardData, handleCreate, handleDelete, handleUpdate } from './DashboardScripts';

const Dashboard = () => {
  const {user, setUser} = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  const reload = () => {getDashboardData(setTasks)};
  useEffect(() => { getDashboardData(setTasks) }, []);

  return (
    <div className='dashboard'>
      <p>Welcome {user?.email}!</p>
      <input className='dashboard-search' placeholder='Search for task' />
      <h2>Tasks pending</h2>
      <button className='task-create' onClick={() => handleCreate(reload)}>Create a Task</button>
      {tasks.map((task) =>       
      <div className='task' key={task[0]}>
        <span>{task[1].name}</span>
        <button className='task-edit' onClick={() => handleUpdate(task[0], task[1].name, reload)}>Update</button>
        <button className='task-delete' onClick={() => handleDelete(task[0], reload)}>Delete</button>
      </div>)}
      <h2>Tasks completed</h2>
    </div>
  )
}

export default Dashboard