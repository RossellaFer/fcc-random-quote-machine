import React from "react";
import "./QuoteDisplay.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const QuoteDisplay = ({ quoteText, author }) => (
  <div className="quote_container">
    <FormatQuoteIcon className="quote_icon" />
    <p id="text">{quoteText}</p>
    <p id="author"> {author !== null ? author : "Anonymous Author"}</p>
  </div>
);

export default QuoteDisplay;
