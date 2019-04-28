import React, { Component } from 'react';
import { drawCanvas } from '../helpers.js';
import ResultsTable from './ResultsTable';
import "../css/Map.css";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: true
    }
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.ctx = this.canvas.current.getContext("2d");
    drawCanvas(this.ctx, this.props.results);
  }

  componentDidUpdate() {
    this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
    drawCanvas(this.ctx, this.props.results);
  }

  renderResults() {
    if(this.state.showMap) {
      return(
        <div>
          <canvas ref={this.canvas}></canvas> 
          <button onClick={() => {this.setState({showMap: false})}}>Results Table</button>
        </div>
      )  
    } else {
      return(
        <div>
          <ResultsTable results={this.props.results} />
        </div>
      )
    }
  }

  render() { return this.renderResults() }
}

export default Map;