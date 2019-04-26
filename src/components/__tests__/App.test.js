import React from 'react';
import { shallow } from "enzyme";
import App from '../App';

describe('App', () => {
  it("shallow renders <App/>, and checks the length of state.results", (done) => {
    fetch.mockResponseOnce(JSON.stringify({ results: '12345' }))
    const wrapper = shallow(<App />);
    setTimeout(() => {
      wrapper.update()
      console.log(wrapper.state())
      expect(wrapper.state().results).length.toEqual(17);
      done();
    }, 5000)
  });
})
