const express = require('express');
const routes_html = require('./Routes/routes_html');  //Importing the routes files
const routes_api = require('./Routes/routes_api'); //Importing the routes files

const PORT = process.env.PORT || 3001;
const app = express();  //Set the port

//Middleware setup (will always run the code in order, from top to bottom)

app.use(express.urlencoded({extended: false}));  //parse URL encoded body
app.use(express.json());
app.use(express.static("public"));
app.use(routes_html);   //Imported routes on the path
app.use(routes_api);

//Start the server 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});