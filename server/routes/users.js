const express = require('express');
const firebase = require('../firebase');
const router = express.Router();
const auth = firebase.auth();
const db = firebase.firestore();

// Creates a new user
router.post("/create", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  await auth.createUserWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      // Create user in FireStore, add email ref
      await db.collection("users").doc(userCredential.user.uid).set({
        email: email,
      });

      // Signed in
      let user = { uid: userCredential.user.uid, email: userCredential.user.email };
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
})

// Check if user login details is correct
router.post('/login', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  await auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = { uid: userCredential.user.uid, email: userCredential.user.email };
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
})

module.exports = router;