import axios from "axios";

const url = "http://localhost:3001/tasks/";

// Loads task data into the state
const getDashboardData = async (setTasks) => {
  let uid = sessionStorage.getItem("uid");

  await axios.get(`${url}/${uid}`)
    .then((result) => {
      // console.log(result.data);
      setTasks(result.data);
    })
    .catch((error) => {
      // console.log(error);
    })
}

// Creates a new task
const handleCreate = async (reload) => {
  let uid = sessionStorage.getItem("uid");
  let task = prompt("Enter your task", "Running a marathon");

  if (task) {
    await axios.post(`${url}`, {
      uid: uid,
      task: task
    })
      .then((result) => {
        // console.log(result);
        reload();
        alert("Task created!")
      })
      .catch((error) => {
        // console.log(error);
        alert("Oops, something went wrong...")
      })
  }
}

// Updates a task
const handleUpdate = async (tid, task, reload) => {
  let uid = sessionStorage.getItem("uid");
  let update = prompt("Enter new task name", task);

  if (update) {
    await axios.put(`${url}/${tid}`, {
      uid: uid,
      id: tid,
      task: update
    })
      .then((result) => {
        // console.log(result);
        reload();
        alert("Task changed!")
      })
      .catch((error) => {
        // console.log(error);
        alert("Oops, something went wrong...")
      })
  }
}

// Checks a task
const handleCheck = async (tid, isChecked, reload) => {
  let uid = sessionStorage.getItem("uid");

  await axios.patch(`${url}/${tid}`, {
    uid: uid,
    id: tid,
    isChecked: isChecked
  })
    .then((result) => {
      // console.log(result);
      reload();
    })
    .catch((error) => {
      // console.log(error);
      alert("Oops, something went wrong...")
    })
}

// Deletes a task
const handleDelete = async (tid, reload) => {
  let uid = sessionStorage.getItem("uid");

  await axios.delete(`${url}/${tid}`, {
    data: {
      uid: uid,
      id: tid
    }
  })
    .then((result) => {
      // console.log(result);
      reload();
      alert("Task deleted!")
    })
    .catch((error) => {
      // console.log(error);
      alert("Oops, something went wrong...")
    })
}

export { getDashboardData, handleCreate, handleUpdate, handleDelete, handleCheck }