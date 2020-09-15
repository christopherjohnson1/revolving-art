import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { RevolvingArt } from "./components/RevolvingArt"

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <RevolvingArt />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
