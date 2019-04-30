import React from 'react';
import { shallow } from 'enzyme';
import { DayQuote } from '../Home';


function setup() {
  const props = {
    dayQuote: jest.fn(),
    myQuote: [{id: 2}],
    quotes: []
  };

  const enzymeWrapper = shallow(<DayQuote {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('DayQuote', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      enzymeWrapper.setProps({
        dayQuote: jest.fn(),
        myQuote: [{id: 2}],
        newQuote: {},
        quotes: [],
      })

      expect(enzymeWrapper.find('h3').hasClass('center')).toBe(true);

      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});