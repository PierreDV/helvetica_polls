import React from 'react';

function PollFilter({ results, selectedPoll, handleChange }) {
  return(
    <select
      onChange={handleChange}
      value={selectedPoll}
      name="Swiss Polls"
    >
      {results.map((result, index) => {
        return (
          <option 
            key={index} 
            value={index}
          >
            {result.description.en}
          </option>
        ); 
      })}
    </select>
  )
}

export default PollFilter;