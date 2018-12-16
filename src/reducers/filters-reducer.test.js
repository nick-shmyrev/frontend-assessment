import filtersReducer from './filters-reducer';

describe('Filters reducer', () => {
  const defaultState = {
    text: '',
    tag: '',
  };
  
  test('should set default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
  
    expect(state).toEqual(defaultState);
  });
  
  test('should set text filter', () => {
    const text = 'Rand0m txt';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
  
    expect(state).toEqual({...defaultState, text});
  });
  
  test('should set tag filter', () => {
    const tag = 'New tag';
    const state = filtersReducer(undefined, { type: 'SET_TAG_FILTER', tag });
  
    expect(state).toEqual({...defaultState, tag});
  });
});
