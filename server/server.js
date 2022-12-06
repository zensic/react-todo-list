const express = require('express');
const app = express();
require('dotenv').config();

//console.log(process.env);
//const api_key = process.env.API_KEY;

app.get('/', (req, res) => {
  console.log('Here');
  res.send('Hi');
});

const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(3001);