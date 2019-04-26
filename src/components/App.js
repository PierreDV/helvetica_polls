import React, { Component } from "react";
import "../css/App.css";
import ResultsTable from './ResultsTable';
import PollFilter from './PollFilter';

class App extends Component {
  handlePollFilterChange = this.handlePollFilterChange.bind(this);

  state = { 
    results: [],
    selectedPoll: 0
  };

  handlePollFilterChange(selectedPoll) {
    this.setState({
      selectedPoll: selectedPoll
    });
  }

  componentDidMount() {
    fetch('./swiss-vote-results-sample.json')
      .then(res => res.json())
      .then(res => this.setState({ results: res }))
      .catch(error => console.error("FetchError:", error));
  }

  render() {
    const { results, selectedPoll } = this.state;
    return(
      <div>
        <PollFilter handleChange={this.handlePollFilterChange} polls={results.map(result => result.description.en)}/>
        <ResultsTable {...results[selectedPoll]}/>
      </div>
    ); 
  }
}

export default App;
