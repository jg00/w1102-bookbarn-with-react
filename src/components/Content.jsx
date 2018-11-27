import React, { Component } from "react";
import "./Content.css";

const IMAGES_URL =
  "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/";

class Content extends Component {
  render() {
    return (
      <div>
        <div className="div-container">
          <div className="item1">Book List</div>
          <div className="item2">{this.displayItems()}</div>
        </div>
      </div>
    );
  }

  displayItems() {
    return this.props.books.map((book, index) => (
      <div className="listed-item" key={index}>
        <label>
          {book.author}: {book.title}
        </label>
        <label>{book.language}</label>
        <label>{book.country}</label>

        <button className="details-button">Details</button>

        <div className="div-book-image">
          <img src={`${IMAGES_URL}${book.imageLink}`} alt="test" />
        </div>
      </div>
    ));
  }
}

export default Content;
