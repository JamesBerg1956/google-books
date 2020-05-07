// import React and Component from react
import React, { Component } from "react";
// import Jumbotron component
import Jumbotron from "../components/Jumbotron";
// import Card component
import Card from "../components/Card";
// import Book component
import Book from "../components/Book";
// import Footer component
import Footer from "../components/Footer";
// import API calls
import API from "../utils/API";
// import Col Row Container components from /Grid/index.js
import { Col, Row, Container } from "../components/Grid";
// import List component
import { List } from "../components/List";

// create Saved Class component
class Saved extends Component {
  // create state to store books object array
  state = {
    books: []
  };

  // this runs every time a component is loaded
  componentDidMount() {
    // call method to reset the set the state for books array
    this.getSavedBooks();
  }

  // function that calls API and sets state of books array with response
  getSavedBooks = () => {
    // call API to get an object array of books
    API.getSavedBooks()
    // promise callback with response as param
      .then(res =>
        // set state of book object array with response
        this.setState({
          books: res.data
        })
      )
      // error catching
      .catch(err => console.log(err));
  };

  // handleBookDelete function takes id as parameter
  handleBookDelete = id => {
    // call API method and pass id as parameter, and recreate books array in state again
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  // JSX to be rendered to page
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {/* if the books array has elements  */}
              {this.state.books.length ? (
                <List>
                  {/* create Book objects for each book in array and pass props from key value pairs */}
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      // create a button on the fly
                      Button={() => (
                        <button
                          // pass onClick event to button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export Saved page
export default Saved;
