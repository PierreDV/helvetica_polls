import React from 'react';
import { mount } from 'enzyme';
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
    component = mount(
      <PollFilter 
        handleChange={jest.fn()} 
        polls={polls} 
        selectedPoll={initialSelectedPoll} 
      />
    );
  });

  it('checks the initial state and select element values', () => {
    expect(component.props().selectedPoll).toBe(initialSelectedPoll);
    expect(component.find("select").props().value).toBe(initialSelectedPoll);
  });

  it("changes the select option and checks that the state reflects the updated value", () => {
    const updatedSelectedPoll = polls[1];

    component
      .find("select")
      .simulate("change", { target: { value: updatedSelectedPoll } });

    expect(component.props().handleChange).toHaveBeenCalledTimes(1);
  });
});