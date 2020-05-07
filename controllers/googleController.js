// import axios package
const axios = require("axios");
// import models
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  // googleController.findAll()
  findAll: function(req, res) {
    // deconstruct variables from the request
    const { query: params } = req;
    // call axios
    axios
      // GET request to googleapi
      .get("https://www.googleapis.com/books/v1/volumes", 
      // use parameters deconstructed from request
      {
        params
      })
      // promise callback function
      // return an array of concatenated information from the api results
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // promise callback function
      // return all books
      .then(apiBooks =>
        db.Book.find()
        // return an array of books where the id = googleId
        .then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      // respond with final object array of books in json format
      .then(books => res.json(books))
      // throw error if error
      .catch(err => res.status(422).json(err));
  }
};
