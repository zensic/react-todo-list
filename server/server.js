const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Here');
  res.send('Hi');
});

const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(3001);