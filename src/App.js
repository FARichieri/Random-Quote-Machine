import './App.css';
import twitter from './icons/twitter.png'
import quote from './icons/quote.png'

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
    {
      quote: "My reputation grows with every failure.",
      author: "George Shaw"
    },
    {
      quote: "Good thoughts are no better than good dreams, unless they be executed.",
      author: "Ralph Emerson"
    },
    {
      quote: "Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.",
      author: "Dalai Lama"
    },
    {
      quote: "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
      author: "Buddha"
    },
    {
      quote: "For success, attitude is equally as important as ability.",
      author: "Harry Banks"
    },
    {
      quote: "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
      author: "Colin Powell"
    },
    {
      quote: "A person who never made a mistake never tried anything new.",
      author: "Albert Einstein"
    },
    {
      quote: "Better than a thousand hollow words is one word that brings peace.",
      author: "Buddha"
    },
    {
      quote: "The possibilities are numerous once we decide to act and not react.",
      author: "George Bernard Shaw"
    },
    {
      quote: "Almost everything comes from nothing.",
      author: "Henri Amiel"
    },
    {
      quote: "Sometimes by losing a battle you find a new way to win the war.",
      author: "Donald Trump"
    },
    {
      quote: "Listen to what you know instead of what you fear.",
      author: "Richard Bach"
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
      <button id="new-quote" onClick={() => generateQuote()}>New<img alt="quote" src={quote}/></button>
      <a id="tweet-quote" target="_blank" rel="noreferrer" href="twitter.com/intent/tweet">Share<img alt="twitter" src={twitter}/></a>
    </div>
    <p className='by'><a href="https://github.com/FARichieri" target="_blank">By frichieri</a></p>
  </div>
  );
}

export default App;
