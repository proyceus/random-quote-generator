import React, { useState } from 'react';
import './QuoteBox.css';

let quoteArray = [{author: "Gandhi", quote: "Let us feast."}, {author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken."}, {author: "Frank Zappa", quote: "So many books, so little time"}, {author: "Marcus Tullius Cicero", quote: "A room without books is like a body without a soul"}, {author: "Pierre Royce", quote: "This is hard stuff, man"}];

const QuoteBox = () => {
  const [num, setNum] = useState(0);

  let randomNumber = () => {
    let randomNum = Math.floor(Math.random() * quoteArray.length);


      return randomNum;



  }


  const clickHandler = () => {
    setNum(randomNumber());
  }


  return (
    <div id='quote-box'>
      <p id='text'>"{quoteArray[num].quote}"</p>
      <p id='author'>~{quoteArray[num].author}</p>
      <div id='lower_container'>
        <button id='new-quote' onClick={clickHandler}>New Quote</button>
        <a href='twitter.com/intent/tweet' target='_blank' id='tweet-quote'>Tweet this quote!</a>
      </div>
    </div>
  )
}

export default QuoteBox;