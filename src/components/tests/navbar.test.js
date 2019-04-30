import React from 'react';
import { shallow } from 'enzyme';
import About from '../About';

test('Should render About', () => {
  const wrapper = shallow(<About />);
  expect(wrapper).toMatchSnapshot();
});