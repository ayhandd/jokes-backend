const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setup: {
        type: String,
        minlength: [10, "setup should be 10 character long"]
    },
	punchline:{
        type: String,
        minlength: [3, "punchline should be 3 character long"]
    }
},
{timestamps: true});

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;