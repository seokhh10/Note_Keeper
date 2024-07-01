const router = require('express').Router();
const path = require('path');   //path module provides utilities for working with file and directory paths.

//Defines the route that sends "index.html". Respond to a user when GET request is made
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
//Defines the route that sends "notes.html". Respond to a user when GET request is made
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html' ))
});



module.exports = router;