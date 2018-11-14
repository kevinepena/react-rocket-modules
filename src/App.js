// src/App.js
import React, { Component } from 'react';
import { Router, Route, Redirect } from "react-router-dom";
import history from "./history";
import NASA from "./pages/NASA";
import Horoscope from "./pages/Horoscope";
import './App.css';
import Background from "./components/Background"



class App extends Component {



  constructor(props) {
    super(props);
    this.getScroll = this.getScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getScroll);
  }

  getScroll() {
    const scrolly = window.scrollY;

    if (scrolly > 0) {
      this.setState({ nav: true })
    } else if (scrolly === 0) {
      this.setState({ nav: false })
    }
  }


  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Background />
          <Route
            exact
            path="/"
            render={props => {
              return <Horoscope {...props} />;
            }}
          />

          <Route
            exact
            path="/nasa"
            render={props => {
              return <NASA {...props} />;
            }}
          />

        </div>

      </Router>
    )
  }
}

export default App;