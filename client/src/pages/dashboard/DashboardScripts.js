import axios from "axios";

const url = "http://localhost:3001/tasks/";

const getDashboardData = async (setTasks) => {
  console.log(sessionStorage.getItem("uid"));

  await axios.get(`${url}`, {
    uid: sessionStorage.getItem("uid")
  })
    .then((result) => {
      console.log(result.data);

      setTasks(result.data);
    })
    .catch((error) => {
      console.log(error);
    })
}

const handleCreate = async (uid) => {
  let task = prompt("Enter your task", "Running a marathon");

  if (task) {
    await axios.post(`${url}`, {
      uid: uid,
      task: task
    })
      .then((result) => {
        console.log(result);

        alert("Task created!")
      })
      .catch((error) => {
        console.log(error);

        alert("Oops, something went wrong...")
      })
  }
}

const handleUpdate = async () => {

}

const handleDelete = async () => {

}

const handleCheck = async () => {

}

export { getDashboardData, handleCreate, handleUpdate, handleDelete, handleCheck }