const express = require('express');
const firebase = require('../firebase');
const router = express.Router();
const db = firebase.firestore();
const { v4: uuidv4 } = require('uuid');

// Returns all tasks
router.get("/:id", async (req, res) => {
  let uid = req.params.id;
  await db.collection("users").doc(uid).collection("tasks").get()
    .then((querySnapshot) => {
      let tasksTemp = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        tasksTemp.push([doc.id, doc.data()]);
      });
      res.status(200).send(tasksTemp);
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
})

// Creates a task
router.post('/', async (req, res) => {
  let uid = req.body.uid;
  let id = uuidv4();
  let task = req.body.task;

  await db.collection("users").doc(uid).collection("tasks").doc(id).set({
    name: task,
    checked: false
  })
    .then(() => {
      res.status(201).send("Document successfully created!");
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
})

// Updates a task
router.patch('/update', async (req, res) => {
  let uid = req.body.uid;
  let id = req.body.id;
  let task = req.body.task;

  let taskRef = db.collection("users").doc(uid).collection("tasks").doc(id);
  await taskRef.update({
    name: task
  })
    .then(() => {
      res.status(201).send("Task successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      res.status(400).send(error.message);
    });
})


// Checks a task
router.patch('/check', async (req, res) => {
  let uid = req.body.uid;
  let id = req.body.id;
  let isChecked = req.body.checked;

  let taskRef = db.collection("users").doc(uid).collection("tasks").doc(id);
  await taskRef.update({
    checked: isChecked
  })
    .then(() => {
      res.status(201).send("Task checked!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      res.status(400).send(error.message);
    });
})

// Deletes a task
router.delete('/', async (req, res) => {
  let uid = req.body.uid;
  let id = req.body.id;

  console.log(`${uid} ${id}`)

  let taskRef = db.collection("users").doc(uid).collection("tasks").doc(id);
  await taskRef.delete()
    .then(() => {
      res.status(201).send("Task successfully deleted!");
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
});

module.exports = router;