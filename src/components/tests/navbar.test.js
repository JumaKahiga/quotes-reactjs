import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';

test('Should render About', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
});