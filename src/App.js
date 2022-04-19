import './App.css';

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
  ]

  window.onload = init;
  function init() {
    newQuote();
  }

  function newQuote() {
    let id = Math.floor(Math.random() * QUOTEBANK.length)
    document.getElementById("text").innerText = QUOTEBANK[id].quote
    document.getElementById("author").innerText = QUOTEBANK[id].author
  }

  return (
  <div id="quote-box">
    <div id="text"></div>
    <div id="author"></div>
    <button id="new-quote" onClick={() => newQuote()}>New Quote</button>
    <a src="#" href="twitter.com/intent/tweet" id="tweet-quote"><button>Tweet Quote</button></a>
  </div>
  );
}

export default App;
