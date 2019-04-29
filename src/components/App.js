import React, { Component } from "react";
import "../css/App.css";
import PollFilter from './PollFilter';
import Map from './Map';
import ResultsTable from './ResultsTable';

class App extends Component {
  state = { 
    results: {},
    selectedPoll: ""
  };

  handlePollFilterChange = selection => {
    console.log(selection)
    this.setState({
      selectedPoll: selection
    });
  }

  componentDidMount() {
    fetch('./swiss-vote-results-sample.json')
      .then(res => res.json())
      .then(res => this.setState({ results: res }))
      .catch(error => console.error("FetchError:", error));
  }

  render() {
    return(
      <div>
        <PollFilter 
          handleChange={this.handlePollFilterChange} 
          {...this.state}
        />
        <figure>
          <Map {...this.state.selectedPoll}>
            <ResultsTable />
          </Map>
        </figure>
        
      </div>
    ); 
  }
}

export default App;
