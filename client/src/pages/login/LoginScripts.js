import axios from "axios";

const url = "http://localhost:3001";

// Login 
const handleConfirm = async (email, password, navigate) => {
  await axios.post(`${url}/users/login`, {
    email: email,
    password: password
  })
    .then((result) => {
      sessionStorage.setItem("uid", result.data.uid);
      sessionStorage.setItem("email", result.data.email);
      navigate("/dashboard");
    })
    .catch((error) => {
      // console.log(error);
      alert("Invalid password or username!");
    })
}

// Registration
const handleRegister = async (email, password, navigate) => {
  await axios.post(`${url}/users/create`, {
    email: email,
    password: password
  })
    .then((result) => {
      alert("Registered successfully!");
      sessionStorage.setItem("uid", result.data.uid);
      sessionStorage.setItem("email", result.data.email);

      let defaultTasks = ["Google interview", "Paint mona lisa", "Read a dictionary"];

      defaultTasks.forEach(async (task) => {
        await axios.post(`${url}/tasks`, {
          uid: result.data.uid,
          task: task,
          checked: false
        })
          .then((result) => {
            // console.log(result);
            console.log("Task created");
          })
          .catch((error) => {
            // console.log(error);
            console.log("Task creation failed");
          })
      })

      navigate("/dashboard");
    })
    .catch((error) => {
      console.log(error);
      alert("User is invalid!");
    })
}

export { handleConfirm, handleRegister };