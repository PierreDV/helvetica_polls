import React from 'react';
import { shallow } from "enzyme";

describe("The SwissVote app", () => {
  it("checks that the ResultsTable component renders content from its props", () => {
    const tableComponent = shallow(<ResultsTable {...mockResult} />);
    expect(tableComponent.contains(<caption>{mockResult.description.en}</caption>));
  });
});
