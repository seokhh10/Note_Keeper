const { route } = require('./routes_html');

const router = require('express').Router();





router.get('/api/notes', async (req, res) => {
    console.log(router);
})




module.exports = router;