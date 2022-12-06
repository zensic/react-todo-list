const express = require('express');
const firebase = require('../firebase');
const router = express.Router();
const firestore = firebase.firestore();

// Router checks from top to bottom, code matched first will run
router.get("/", async (req, res) => {
  res.send('Task List');
})

router.post('/', async (req, res) => {
  try {
    await firestore.collection('users').doc('firest').set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
    res.send('Record saved successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
})

router
  .route('/:id')
  .put((req, res) => {
    res.send(`Update Task With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Task With ID ${req.params.id}`);
  });

module.exports = router;