const router = require('express').Router();
 const fs = require ('fs'); //Imports the built-in Node.js file system(fs) module. Interacting with the file system, such as reading, writing and deleting files.

//Defines the GET request to this route, '/api/notes'
router.get('/api/notes', async (req, res) => {
    const dataBase = await JSON.parse(fs.readFileSync("db/db.json", "utf-8"));
    res.json(dataBase);

    

});




module.exports = router;