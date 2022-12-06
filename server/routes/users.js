const express = require('express');
const firebase = require('../firebase');
const router = express.Router();
const auth = firebase.auth();

// Router checks from top to bottom, code matched first will run
router.post("/create", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  await auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      res.status(201).send(userCredential.user);
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
})

router.post('/login', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  await auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      res.status(200).send(userCredential.user);
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
})

router.post('/logout', async (req, res) => {
  await auth.signOut().then(() => {
    // Sign-out successful.
    res.status(200).send("success");
  }).catch((error) => {
    // An error happened.
    res.status(400).send(error.message);
  });
})

module.exports = router;