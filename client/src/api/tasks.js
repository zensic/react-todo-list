import axios from "axios";

const url = "http://localhost:3001/users/";

const createTask = async (uid, task) => {
  await axios.post(`${url}`, {
    uid: uid,
    task: task
  })
    .then((result) => {
      console.log(result);

      return true;
    })
    .catch((error) => {
      console.log(error);

      return false;
    })
}

const updateTask = async (uid, tid) => {

}

const deleteTask = async (uid, tid) => {

}

const checkTask = async (uid, tid) => {

}

export { createTask, updateTask, deleteTask, checkTask };