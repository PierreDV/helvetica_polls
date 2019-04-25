import React, { Component } from "react";
import "../css/App.css";

import ResultsTable from './ResultsTable';

class App extends Component {
  state = {
    mockResult: {}
  };

  render() {
    return (
      <div>
        <ResultsTable {...this.state.mockResult}/>
      </div>
    );
  }
}

export default App;
