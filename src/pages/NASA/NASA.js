import React, { Component } from 'react';
import Title from "../../components/Title";
import Grid from "../../components/Grid";
import Rocket from "../../components/Rocket";
import Smoke from "../../components/Rocket/Smoke";
import facts from "../../NASA_facts.json";


class NASA extends Component {

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
      </div>
    );
  }
}

export default NASA;
