// src/App.js
import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import history from "./history";
import NASA from "./pages/NASA";
import Horoscope from "./pages/Horoscope";
import './App.css';
import Background from "./components/Background";
import axios from 'axios';



class App extends Component {



  constructor(props) {
    super(props);
    this.getScroll = this.getScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getScroll);

    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          // for when getting location is a success
          console.log('latitude', position.coords.latitude,
            'longitude', position.coords.longitude);

          axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search.json?q=${position.coords.latitude}, ${position.coords.longitude}&apikey=MfNPvCIJNCqbADz8eCHFJB5g4H3j6KqX`)
            .then(resp => {
              console.log(resp.data)
              axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${resp.data.Key}?apikey=MfNPvCIJNCqbADz8eCHFJB5g4H3j6KqX`)
                .then(curr => console.log(curr.data))
                .catch(err => console.log(err));

            axios.get(`https://www.timeanddate.com/moon/phases/usa/${resp.data.LocalizedName}`)
            .then(data => console.log(data))
            .catch(err => console.log(err));
            
            })
            .catch(err => console.log(err));
        },
        function error(error_message) {
          // for when getting location results in an error
          console.error('An error has occured while retrieving location', error_message)
        })
    } else {
      // geolocation is not supported
      // get your location some other way
      console.log('geolocation is not enabled on this browser')
    }

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