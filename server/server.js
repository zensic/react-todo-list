const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Dashboard App API');
});

const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Running of port ${PORT}`)
});