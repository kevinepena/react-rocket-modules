import React, { Component } from 'react';
import Title from "./Title";
import Grid from "./Grid";
import Rocket from "./Rocket";
import Smoke from "./Rocket/Smoke";
import Background from "./Background";
import facts from "./NASA_facts.json";


//styles
// import './App.scss';


// import styles from "./App.css"

class App extends Component {

  state = {
    facts
  }

  constructor(props) {
    super(props);
    this.updateClicked = this.updateClicked.bind(this);
  }

  updateClicked(id) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.facts[id].clicked = true;
    this.setState({ stateCopy });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Grid facts={this.state.facts} updateClicked={this.updateClicked} />
        <Rocket />
        <Smoke />
        <Background />
      </div>
    );
  }
}

export default App;
