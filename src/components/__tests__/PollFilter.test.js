import React from 'react';
import { shallow } from 'enzyme';
import PollFilter from '../PollFilter';

describe('PollFilter', () => {
  let polls, initialSelectedPoll, component;

  beforeEach(() => {
    polls = [
      "National Bank profits for the OASI",
      "Amendment to the Asylum Act",
      "Asylum Act"
    ];
    initialSelectedPoll = polls[0];
    component = shallow(<PollFilter handleChange={jest.fn()} polls={polls} />);
  });

  it('checks the initial state and select element values', () => {
    expect(component.state().selectedPoll).toBe(initialSelectedPoll);
    expect(component.find("select").props().value).toBe(initialSelectedPoll);
  });

  it("changes the select option and checks that the state reflects the updated value", () => {
    const updatedSelectedPoll = polls[1];

    component
      .find("select")
      .simulate("change", { target: { value: updatedSelectedPoll } });
    
    expect(component.state().selectedPoll).toBe(updatedSelectedPoll);
    expect(component.find("select").props().value).toBe(updatedSelectedPoll);
  });
});