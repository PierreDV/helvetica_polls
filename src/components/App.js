import React, { Component } from "react";
import "../css/App.css";
import PollFilter from './PollFilter';
import Map from './Map';

class App extends Component {
  state = { 
    results: [],
    selectedPoll: 0
  };

  handlePollFilterChange = (event) => {
    this.setState({
      selectedPoll: event.target.value
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
        <PollFilter 
          handleChange={this.handlePollFilterChange} 
          {...this.state}
        />
        <figure>
          <Map {...results[selectedPoll]} />
        </figure>
        
      </div>
    ); 
  }
}

export default App;
