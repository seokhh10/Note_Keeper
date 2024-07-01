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
    const dataBase = JSON.parse(fs.readFileSync("db/db.json", "utf-8"));
    const newFeed = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dataBase.push(newFeed);
    fs.writeFileSync("db/db.json", JSON.stringify(dataBase));
    res.json(dataBase);
});

//Delete request "Bonus"
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync("db/db.json", "utf-8");
    const dataJSON = JSON.parse(data);
    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;  //is used to filter out a specific item from a collection based on an ID comparison.
    });
    fs.writeFileSync("db/db.json", JSON.stringify(newNotes));
    res.json("Note Deleted");
});


module.exports = router;