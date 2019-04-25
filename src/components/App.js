import React, { Component } from "react";
import "../css/App.css";

import ResultsTable from './ResultsTable';

class App extends Component {
  state = {
    mockResult: {}
  };

  componentDidMount() {
    fetch('./swiss-vote-results-sample.json')
      .then(res => res.json())
      .then(res => this.setState({ mockResult: res }))
      .catch(error => console.error("FetchError:", error));
  }

  render() {
    return (
      <div>
        <ResultsTable {...this.state.mockResult[0]}/>
      </div>
    );
  }
}

export default App;
