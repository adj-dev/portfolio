import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill() // enables smooth scrolling in Safari, IE and Edge browsers

ReactDOM.render(<App />, document.getElementById('root'))