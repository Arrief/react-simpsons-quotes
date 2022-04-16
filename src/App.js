import './App.css';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import React, { useState } from 'react';

function App() {
  let [quote, setQuote] = useState(
    {
    quote: 'Oh, so they have Internet on computers now!',
    character: 'Homer Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
    characterDirection: 'Right',
    }
  );

  const url = "https://simpsons-quotes-api.herokuapp.com/quotes";

  const simpsonQuote = () => {  
    axios.get(url)
    .then((response) => response.data)
    .then((data) => setQuote(data[0]));
  }

  return (
    <div className="App">
        <button onClick={simpsonQuote}>Get a new quote</button>
        <QuoteCard {... quote} />
    </div>
  );
}

export default App;
