import React from 'react';
import { shallow } from 'enzyme';
import { PostQuotes } from '../PostQuotes';


function setup() {
  const props = {
    createQuotes: jest.fn(),
  };

  const enzymeWrapper = shallow(<PostQuotes {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('PostQuotes', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();

      const spy = jest.spyOn(enzymeWrapper.instance(), 'onChange');
      const event = { target: { name: 'special', value: 'party' } };
      enzymeWrapper.instance().onChange(event);
      expect(spy).toBeCalledWith({ target: { name: 'special', value: 'party' } });
    });
    it('Should dispatch the createQuotes function when the form is submitted with correct input', () => {
      const { enzymeWrapper } = setup();

      enzymeWrapper.setProps({
        createQuote: jest.fn(),
        newQuote: {},
        });

      const event = {
        preventDefault: jest.fn(),
      };
      const state = {
        quote: 'New',
        author: 'New',
      };
      enzymeWrapper.setState(state);
      enzymeWrapper.instance().onSubmit(event);
      expect(enzymeWrapper.instance().props.createQuote).toHaveBeenCalled();
    });
  });
});