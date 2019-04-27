import React from 'react';

function PollFilter({polls, selectedPoll, handleChange}) {
  return(
    <select
      onChange={handleChange}
      value={selectedPoll}
      name="Swiss Polls"
    >
      {polls.map((poll, index) => <option key={poll} value={index}>{poll}</option>)}
    </select>
  )
}

export default PollFilter;