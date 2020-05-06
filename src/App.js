import React from "react";
import "./App.css";
import Button from "./components/Button/Button.js";
import QuoteDisplay from "./components/QuoteDisplay/QuoteDisplay.js";
import TwitterButton from "./components/TwitterButton/TwitterButton.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuote: "",
      author: "",
    };

    this.getNewQuote = this.getNewQuote.bind(this);
    this.getRandomIndex = this.getRandomIndex.bind(this);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getRandomIndex() {
    const randomIndex = Math.floor(Math.random() * 200) + 1;
    return randomIndex;
  }

  getNewQuote() {
    //make API call and get the quote text
    let index = this.getRandomIndex();
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        console.log(data[index]);
        this.setState({
          randomQuote: data[index].text,
          author: data[index].author,
        });
      });
  }

  changeBackgroundColor() {
    const colorCodes = [
      "#ffdde1",
      "#ee9ca7",
      "#6dd5ed",
      "#2193b0",
      "#f7797d",
      "#FBD786",
      "#C6FFDD",
      "#f7797d",
      "#12c2e9",
      "#f7797d",
      "#c471ed",
      "#1565C0",
      "#b92b27",
      "#3b8d99",
      "#99f2c8",
      "#86A8E7",
    ];
    const randomIndex = Math.floor(Math.random() * colorCodes.length);
    document.getElementById("quote-box").style.backgroundColor =
      colorCodes[randomIndex];
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <QuoteDisplay
          quoteText={this.state.randomQuote}
          author={this.state.author}
        />
        <div className="buttons_container">
          <Button
            changeBackgroundColor={this.changeBackgroundColor}
            buttonDisplayName="Get New Quote"
            clickHandler={this.getNewQuote}
          />
          <TwitterButton
            quoteText={this.state.randomQuote}
            author={this.state.author}
          />
        </div>
      </div>
    );
  }
}

export default App;
