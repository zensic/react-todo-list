const express = require('express');
const firebase = require('../firebase');
const router = express.Router();
const db = firebase.firestore();
const { v4: uuidv4 } = require('uuid');

// Router checks from top to bottom, code matched first will run
router.get("/", async (req, res) => {
  await db.collection("tasks").get()
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

router.post('/', async (req, res) => {
  let id = uuidv4();
  let task = req.body.task;
  await db.collection("tasks").doc(id).set({
    name: task,
    checked: false
  })
    .then(() => {
      res.status(201).send("Document successfully written!");
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
})

router
  .route('/:id')
  .put(async (req, res) => {
    let id = req.params.id;
    let isChecked = req.body.checked;
    let taskRef = db.collection("tasks").doc(id);
    await taskRef.update({
      checked: isChecked
    })
      .then(() => {
        res.status(201).send("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        res.status(400).send(error.message);
      });
  })
  .delete(async (req, res) => {
    let id = req.params.id;
    db.collection("tasks").doc(id).delete().then(() => {
      res.status(201).send("Document successfully deleted!");
    }).catch((error) => {
      res.status(400).send(error.message);
    });
  });

module.exports = router;