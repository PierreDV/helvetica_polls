import React, { Component } from "react";
import "../css/App.css";
import ResultsTable from './ResultsTable';

class App extends Component {
  state = { results: {} };

  componentDidMount() {
    fetch('./swiss-vote-results-sample.json')
      .then(res => res.json())
      .then(res => this.setState({ mockResult: res }))
      .catch(error => console.error("FetchError:", error));
  }

  render() {
    return <ResultsTable {...this.state.results[0]}/>;
  }
}

export default App;
