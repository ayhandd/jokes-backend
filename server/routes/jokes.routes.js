const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get("/api/jokes", JokeController.getAllJokes);
    app.get("/api/jokes/:id", JokeController.getJoke);
    app.get("/api/joke/random", JokeController.getRandomJoke);
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteExistingJoke);
}