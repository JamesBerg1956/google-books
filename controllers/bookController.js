// import all models
const db = require("../models");

// Defining methods for the bookController
module.exports = {
  // bookController.findAll()
  findAll: function(req, res) {
    // call find() function from Book model
    db.Book.find(req.query)
      // promise to return result in json format
      .then(dbBook => res.json(dbBook))
      // respond with error if error
      .catch(err => res.status(422).json(err));
  },
  // bookController.findById()
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      // promise to return result in json format
      .then(dbBook => res.json(dbBook))
      // respond with error if error
      .catch(err => res.status(422).json(err));
  },
  // bookController.create()
  create: function(req, res) {
    // create a new book with data from post request body
    db.Book.create(req.body)
      // promise to return result in json format
      .then(dbBook => res.json(dbBook))
      // respond with error if error
      .catch(err => res.status(422).json(err));
  },
  // bookController.update()
  update: function(req, res) {
    // find book object with id from url parameter
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      // promise to return result in json format
      .then(dbBook => res.json(dbBook))
      // respond with error if error
      .catch(err => res.status(422).json(err));
  },
  // bookController.remove()
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      // call remove() method from Book model
      .then(dbBook => dbBook.remove())
      // promise to return result in json format
      .then(dbBook => res.json(dbBook))
      // respond with error if error
      .catch(err => res.status(422).json(err));
  }
};
