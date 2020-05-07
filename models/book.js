// import mongoose
const mongoose = require("mongoose");
// import schema from mongoose
const Schema = mongoose.Schema;

// define key value pairs of bookSchema
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// create Book object using mongoose model method
const Book = mongoose.model("Book", bookSchema);

// export Book model
module.exports = Book;
