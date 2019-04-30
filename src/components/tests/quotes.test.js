import React from 'react';
import { shallow } from 'enzyme';
import { Quotes } from '../Quotes';


function setup() {
  const props = {
    fetchQuotes: jest.fn(),
    quotes: [],
  };

  const enzymeWrapper = shallow(<Quotes {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Quotes', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      enzymeWrapper.setProps({
        fetchQuotes: jest.fn(),
        quotes: [{id: 2, author: 'user'}],
        newQuote: {id: 3, author: 'user'}
      })

      expect(enzymeWrapper.find('h3').hasClass('center')).toBe(true);
    });
  });
});