import React from "react";
import "./App.css";
import "express";
import "cors";
import Button from "./components/Button.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuote: "",
    };

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    //make API call and get the quote text
    const endpoint =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    fetch(endpoint)
      .then((response) => {
        console.log(response.json());
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      randomQuote: "Test",
    });
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <div>
          <p id="text">{this.state.randomQuote}</p>
          <p id="author">Rossella</p>
        </div>
        <div>
          <button id="tweet-quote">Tweet quote</button>
          <Button
            buttonDisplayName="New Quote"
            clickHandler={this.getNewQuote}
          />
        </div>
      </div>
    );
  }
}

export default App;
