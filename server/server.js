const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Here');
  res.send('Hi');
});

const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(3001);