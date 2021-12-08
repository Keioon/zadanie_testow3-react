import React from 'react';
import Quote from './Quote';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuote: '',
      currentQuoteAutor: '',
      previousQuote: '',
      previousQuoteAutor: '',
    }
  }

  drawBtnHandleClick = () => {
    const url = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json';

    this.setState({
      previousQuote: this.state.currentQuote,
      previousQuoteAutor: this.state.currentQuoteAutor
    })

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let random = Math.floor(Math.random() * (data.length - 0)) + 0;
        this.setState({
          currentQuote: data[random].quote,
          currentQuoteAutor: data[random].author
        })
      })
  }

  prevBtnHandleClick = () => {
    if(this.state.previousQuote !== '') {
      this.setState({
        currentQuote: this.state.previousQuote,
        currentQuoteAutor: this.state.previousQuoteAutor
      })
    }
  }

  render() {
    const {currentQuote, currentQuoteAutor} = this.state;
    return(
      <div className="container">
        <button onClick={this.drawBtnHandleClick}>Draw a quote</button>
        <button onClick={this.prevBtnHandleClick}>Previous quote</button>
        <Quote quote={currentQuote} author={currentQuoteAutor}></Quote>
      </div>
    );
  }
}

export default App;
