const Jokes = require('../models/jokes.model')

module.exports = {
    getAllJokes : (req, res) =>{
        Jokes.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "There is an error for Getting all jokes", error: err}))
    },
    getJoke: (req, res) =>{
        Jokes.findById(req.params.id)
        .then(joke => res.json(joke))
        .catch(err => res.json({message: "There is an error for Getting joke", error: err}))
    },
    getRandomJoke: (req, res) => {
        Jokes.find()
        .then(allJokes => {
            res.json(allJokes[Math.floor(Math.random()*allJokes.length)])
        })
        .catch(err => res.json({message: "There is an error for Getting all jokes", error: err}))
    },
    createNewJoke : (req, res) => {
        Jokes.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "There is an error for Creating joke", error: err}))
    },
    updateExistingJoke : (req, res) =>{
        Jokes.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({message: "There is an error for Updating joke", error: err}))
    },
    deleteExistingJoke : (req, res) => {
        Jokes.findByIdAndRemove(req.params.id)
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "There is an error for Deleting joke", error: err }));
    }

}