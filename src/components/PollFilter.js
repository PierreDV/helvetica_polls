import React, { Component } from 'react';

class PollFilter extends Component {
  state = {
    polls: this.props.polls,
    selectedPoll: this.props.polls[0]
  };

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.setState({
        polls: nextProps.polls
      })
    }
  }

  handleChange = event => {
    this.setState({ selectedPoll: event.target.value });
  }

  render() {
    return(
      <select
        onChange={this.handleChange}
        value={this.state.selectedPoll}
        name="Swiss Polls"
      >
        {this.state.polls.map((poll, index) => <option key={poll} value={index}>{poll}</option>)}
      </select>
    )
  }
}

export default PollFilter;