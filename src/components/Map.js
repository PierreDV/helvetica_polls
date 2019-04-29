import React, { Component } from 'react';
import { drawCanvas } from '../helpers.js';
import "../css/Map.css";

class Map extends Component {
  canvas = React.createRef();

  componentDidMount() {
    this.ctx = this.canvas.current.getContext("2d");
    drawCanvas(this.ctx, this.props.results);
  }

  componentDidUpdate() {
    this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
    drawCanvas(this.ctx, this.props.results);
  }

  render() { 
    const { description, results } = this.props;
    return(
      <canvas height={538} width={840} ref={this.canvas}>
        {React.cloneElement(this.props.children, { description, results })}
      </canvas> 
    )
  }
}

export default Map;