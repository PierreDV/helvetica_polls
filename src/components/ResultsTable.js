import React from 'react';

function ResultsTable({description, results}) {
  return (
    <table>
      <caption>{description && description.en}</caption>
      <thead>
        <tr>
          <td>Canton</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
      </thead>
      <tbody>
        {results && results.map((result) => {
          return (
            <tr key={result.canton}>
              <td>{result.canton}</td>
              <td>{result.yes}</td>
              <td>{result.no}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default ResultsTable;