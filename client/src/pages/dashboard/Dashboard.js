import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../layout/Layout';
import { getDashboardData, handleCreate } from './DashboardScripts';

const Dashboard = () => {
  const {user, setUser} = useContext(UserContext);
  const [tasks, setTasks] = useState(null);

  useEffect(() => { getDashboardData(setTasks) }, []);

  return (
    <div className='dashboard'>
      <p>Welcome {user?.email}!</p>
      <input className='dashboard-search' placeholder='Search for task' />
      <h2>Tasks pending</h2>
      <button className='task-create' onClick={() => handleCreate(user?.uid)}>Create a Task</button>
      <div className='task'>
        <span>Task name</span>
        <button className='task-edit'>Update</button>
        <button className='task-delete'>Delete</button>
      </div>
      <h2>Tasks completed</h2>

    </div>
  )
}

export default Dashboard