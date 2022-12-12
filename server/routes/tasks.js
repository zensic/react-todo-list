const express = require('express');
const firebase = require('../firebase');
const router = express.Router();
const db = firebase.firestore();
const { v4: uuidv4 } = require('uuid');

// Returns all tasks
router.get("/", async (req, res) => {
  let uid = req.body.uid;
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
  let id = uuidv4();
  let uid = req.body.uid;
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

// Checks a task
router.patch(async (req, res) => {
  let id = req.params.id;
  let uid = req.body.uid;
  let task = req.body.task;
  let taskRef = db.collection("users").doc(uid).collection("tasks").doc(id);
  await taskRef.update({
    task: task
  })
    .then(() => {
      res.status(201).send("Task successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      res.status(400).send(error.message);
    });
})


// Updates a task
router.patch(async (req, res) => {
  let id = req.params.id;
  let uid = req.body.uid;
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
router.delete(async (req, res) => {
  // Deletes a task
  let id = req.params.id;
  let uid = req.body.uid;
  db.collection("users").doc(uid).collection("tasks").doc(id).delete().then(() => {
    res.status(201).send("Document successfully deleted!");
  }).catch((error) => {
    res.status(400).send(error.message);
  });
});

module.exports = router;