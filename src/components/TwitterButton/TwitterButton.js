import React from "react";
import "./TwitterButton.css";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";

const TwitterButton = ({ quoteText, author }) => {
  const quote = `"${quoteText}" - ${
    author !== null ? author : "Anonymous author"
  }`;
  return (
    <IconButton
      id="tweet-quote"
      href={encodeURI(`https://twitter.com/intent/tweet?text=${quote}`)}
      target="_blank"
    >
      <TwitterIcon />
    </IconButton>
  );
};

export default TwitterButton;
