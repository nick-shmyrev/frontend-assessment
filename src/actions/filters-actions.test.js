import { setTagFilter, setTextFilter } from './filters-actions';

describe('Filters Actions', () => {
  test('setTextFilter should return correct action object', () => {
    const text = 'Random text';
    const action = setTextFilter(text);
    
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text,
    });
  });
  
  test('setTagFilter should return correct action object', () => {
    const tag = 'Random tag';
    const action = setTagFilter(tag);
  
    expect(action).toEqual({
      type: 'SET_TAG_FILTER',
      tag,
    });
  });
});
