const express = require('express');
const router = express.Router();

// Router checks from top to bottom, code matched first will run
router.get("/", (req, res) => {
  res.send('Task List');
})

router.post('/', (req, res) => {
  res.send('Create Task');
})

router.get("/new", (req, res) => {
  res.send('Task New Form')
})

router
  .route('/:id')
  .get((req, res) => {
    res.send(`Get Task With ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update Task With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Task With ID ${req.params.id}`);
  });

module.exports = router;