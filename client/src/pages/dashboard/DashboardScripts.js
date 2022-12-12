import axios from "axios";

const url = "http://localhost:3001/tasks/";

const getDashboardData = async (setTasks) => {
  let uid = sessionStorage.getItem("uid");

  await axios.get(`${url}/${uid}`)
    .then((result) => {
      console.log(result.data);

      setTasks(result.data);
    })
    .catch((error) => {
      console.log(error);
    })
}

const handleCreate = async (reload) => {
  let uid = sessionStorage.getItem("uid");
  let task = prompt("Enter your task", "Running a marathon");

  if (task) {
    await axios.post(`${url}`, {
      uid: uid,
      task: task
    })
      .then((result) => {
        console.log(result);
        reload();

        alert("Task created!")
      })
      .catch((error) => {
        console.log(error);

        alert("Oops, something went wrong...")
      })
  }
}

const handleUpdate = async (tid, name, reload) => {
  let uid = sessionStorage.getItem("uid");
  let update = prompt("Enter new task name", name);

  if (update) {
    await axios.patch(`${url}/update`, {
      uid: uid,
      id: tid,
      task: name
    })
      .then((result) => {
        console.log(result);
        reload();

        alert("Task changed!")
      })
      .catch((error) => {
        console.log(error);

        alert("Oops, something went wrong...")
      })
  }
}


const handleCheck = async (tid, isChecked, reload) => {
  let uid = sessionStorage.getItem("uid");

  await axios.patch(`${url}/update`, {
    uid: uid,
    id: tid,
    isChecked: isChecked
  })
    .then((result) => {
      console.log(result);
      reload();
    })
    .catch((error) => {
      console.log(error);

      alert("Oops, something went wrong...")
    })
}

const handleDelete = async (tid, reload) => {
  let uid = sessionStorage.getItem("uid");

  await axios.delete(`${url}/`, {
    uid: uid,
    id: tid
  })
    .then((result) => {
      console.log(result);
      reload();

      alert("Task deleted!")
    })
    .catch((error) => {
      console.log(error);

      alert("Oops, something went wrong...")
    })
}

export { getDashboardData, handleCreate, handleUpdate, handleDelete, handleCheck }