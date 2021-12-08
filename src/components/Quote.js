import React from 'react'
import './Quote.css'

const Quote = (props) => (
  <React.Fragment>
    <h2>{props.quote}</h2>
    <h3>{props.author}</h3>
  </React.Fragment>
)

export default Quote