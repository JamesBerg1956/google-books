// import react and Component
import React, { Component } from "react";
// import Jumbotron from React Component
import Jumbotron from "../components/Jumbotron";
// import Card from React Componenet
import Card from "../components/Card";
// import Form from React Component
import Form from "../components/Form";
// import Book component
import Book from "../components/Book";
// import Footer component
import Footer from "../components/Footer";
// import API functions
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// Home class component
class Home extends Component {
  // create state
  state = {
    // array of books
    books: [],
    // current query
    q: "",
    // a message to display
    message: "Search For A Book To Begin!"
  };

  // track entry into inputs in state
  handleInputChange = event => {
    // deconstruct name and value attributes from input
    const { name, value } = event.target;
    // set state of the state key corrosponding to the name of the input to the value of the input
    this.setState({
      [name]: value
    });
  };

  // getBooks function
  getBooks = () => {
    // call getBooks from API. Parameter is current query
    API.getBooks(this.state.q)
      // promise callback function
      .then(res =>
        // set state of books object array to response
        this.setState({
          books: res.data
        })
      )
      // catch
      .catch(() =>
        // set state of books to blank array
        this.setState({
          books: [],
          // update message to display
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  // handle submit event when user clicks submit button
  handleFormSubmit = event => {
    // prevent page refresh
    event.preventDefault();
    // recreate books object array
    this.getBooks();
  };

  // handleBookSave function
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  // renders JSX to page
  render() {
    return (
      // bootstrap container
      <Container>
        {/* Row component */}
        <Row>
          {/* Col component takes up whole row with medium sized screens */}
          <Col size="md-12">
            {/* bootstrap jumbotron */}
            <Jumbotron>
              {/* Title for jumbotron */}
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              {/* subtitle for jumbotron */}
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          {/* Col component takes up whole row with medium sized screens */}
          <Col size="md-12">
            {/* bootstrap card */}
            <Card title="Book Search" icon="far fa-book">
              {/* Bootstrap form */}
              <Form
                // assign events for form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          {/* Col component. takes up whole row with medium sized screens */}
          <Col size="md-12">
            {/* bootstrap card */}
            <Card title="Results">
              {/* output Book components while passing props from the books array */}
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export Home component
export default Home;
