import quotesReducer from '../quotesReducer';

import {
  DAY_QUOTE, FETCH_QUOTES, NEW_QUOTE,
} from '../../actions/types';


describe('articles reducer', () => {
  it('should return initial state if no action', () => {
    expect(quotesReducer(undefined, {})).toEqual({
      items: [],
      item: {},
      select_item: [],
    });
  });

  it('should handle DAY_QUOTE', () => {
    expect(quotesReducer({
      item: {
        data: 'here',
      },
      items: [],
      select_item: {},
    }, {
      item: {
        type: DAY_QUOTE,
        item: {},
      },
    })).toEqual({
      item: {
        data: 'here',
      },
      items: [],
      select_item: {},
    });
  });

  it('should handle FETCH_QUOTES', () => {
    expect(quotesReducer({
      item: {},
      items: ['a', 'b'],
      select_item: {},
    },
    {
      items: {
        type: FETCH_QUOTES,
        items: [],
      },
    })).toEqual({
      item: {},
      items: ['a', 'b'],
      select_item: {},
    });
  });

  it('should handle NEW_QUOTE', () => {
    expect(quotesReducer({
      item: {
        data: 'new quote',
      },
      items: [],
      select_item: {},
    }, {
      item: {
        type: NEW_QUOTE, item: {},
      },
    })).toEqual({
      item: {
        data: 'new quote',
      },
      items: [],
      select_item: {},
    });
  });
});
