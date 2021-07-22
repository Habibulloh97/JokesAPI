const Joke = require("../models/joke.model")


module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "Something went wrong when creating a joke!!", error: err}))
}

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message: "Something went wrong when finding all the jokes!!", error: err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(singleJoke => res.json(singleJoke))
        .catch(err => res.json({message: "Something went wrong when finding a joke!!", error: err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updateJoke => res.json(updateJoke))
        .catch(err => res.json({message: "Something went wrong when updating a Joke!!", error: err}))
}


module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({message: "Something went wrong when deleting a Joke!!", error: err}))
}
