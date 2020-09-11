const express = require("express");
const cors = require("cors");

// create an instance of the express server
const app = express();

// setup server settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// This will fire our mongoose.connect statement to initialize our database connection
require("./models/jokes.model");
require("./config/mongoose.config");


// This is where we import the users routes function from our user.routes.js file
require("./routes/jokes.routes")(app);

//run the server
app.listen(8000, () => console.log("The server is all fired up on port 8000"));