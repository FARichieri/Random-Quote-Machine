import './App.css';

function App() {

  window.onload = init;
  function init() {
    document.getElementById("text").innerText = "Quote 1"
    document.getElementById("author").innerText = "Author 1"
  }
  return (
  <div id="quote-box">
    <div id="text"></div>
    <div id="author"></div>
    <button id="new-quote">New Quote</button>
    <a src="#" href="twitter.com/intent/tweet" id="tweet-quote"><button>Tweet Quote</button></a>
  </div>
  );
}

export default App;
