import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content";
import BookService from "./bookService";

const BOOKS_URL =
  "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    fetch(BOOKS_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ books: json });
      });
  }

  render() {
    return <Content books={this.state.books} />;
  }
}

export default App;
