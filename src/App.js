import './App.css';
import twitter from './icons/twitter.png'
import quote from './icons/quote.png'

const axios = require('axios');

function App() {

  const QUOTEBANK = [
    { 
      quote: "Most people fail in life because they major in minor things.",
      author: "Tony Robbins"
    },
    { 
      quote: "Everything has beauty, but not everyone sees it.",
      author: "Confucius"
    },
    { 
      quote: "Those who have courage and faith shall never perish in misery.",
      author: "Anne Frank"
    },
    {
      quote: "Work out your own salvation. Do not depend on others.",
      author: "Buddha"
    },
    {
      quote: "One today is worth two tomorrows.",
      author: "Benjamin Franklin"
    },
    {
      quote: "Once you choose hope, anythings possible.",
      author: "Christopher Reeve"
    },
    {
      quote: "God always takes the simplest way.",
      author: "Albert Einstein"
    },
    {
      quote: "One fails forward toward success.",
      author: "Charles Kettering"
    },
    {
      quote: "From small beginnings come great things.",
      author: null
    },
    {
      quote: "Learning is a treasure that will follow its owner everywhere",
      author: "Chinese proverb"
    },
    {
      quote: "Be as you wish to seem.",
      author: "Socrates"
    },
    {
      quote: "The world is always in movement.",
      author: "V. Naipaul"
    },
    {
      quote: "Never mistake activity for achievement.",
      author: "John Wooden"
    },
    {
      quote: "What worries you masters you.",
      author: "Haddon Robinson"
    },
    {
      quote: "One faces the future with ones past.",
      author: "Pearl Buck"
    },
  ]

  window.onload = init;
  function init() {
    generateQuote();
  }

  function generateQuote() {
    let id = Math.floor(Math.random() * QUOTEBANK.length)
    let twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${QUOTEBANK[id].quote.split('%')}" ${QUOTEBANK[id].author.split('%')}`

    document.getElementById("tweet-quote").href = twitterLink
    document.getElementById("text").innerText = `"${QUOTEBANK[id].quote}"`
    document.getElementById("author").innerText = QUOTEBANK[id].author
  }

  return (
  <div id="quote-box">
    <div className="quote-container">
      <div id="text"></div>
      <div id="author"></div>
      <button id="new-quote" onClick={() => generateQuote()}>New<img src={quote}/></button>
      <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">Share<img src={twitter}/></a>
    </div>
    <p className='by'><a href="https://github.com/FARichieri" target="_blank">By frichieri</a></p>
  </div>
  );
}

export default App;
