const router = require('express').Router();
const { v4: uuidv4 } = require('uuid'); //Function generates a random UUID (universal unique identifiers). Resource: UUID npm package
const fs = require ('fs'); //Imports the built-in Node.js file system(fs) module. Interacting with the file system, such as reading, writing and deleting files.


//Defines the GET request to this route, '/api/notes'
router.get('/api/notes', async (req, res) => {
    const dataBase = await JSON.parse(fs.readFileSync("db/db.json", "utf-8"));
    res.json(dataBase);
});

//Defines the POST request to this route, '/api/notes'
router.post('/api/notes', async (req, res) => {
    const dataBase = JSON.parse(fs.readFileSync("db/bd.json", "utf-8"));
    const newFeed = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dataBase.push(newFeed);
    fs.writeFileSync("db/db.json", JSON.stringify(dataBase));
    res.json(dataBase);
});




module.exports = router;