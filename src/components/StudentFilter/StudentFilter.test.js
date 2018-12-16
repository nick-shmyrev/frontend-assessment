import React from 'react';
import { shallow } from 'enzyme';
import { StudentFilter } from './StudentFilter';

describe('StudentFilter component', () => {
  const filters = {
    text: 'test',
    tag: 'new tag',
  };
  const setTextFilter = jest.fn();
  const setTagFilter = jest.fn();
  
  test('should render correctly', () => {
    const wrapper = shallow(<StudentFilter {...filters} setTextFilter={setTextFilter} setTagFilter={setTagFilter}/>);
    
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should set text filter correctly', () => {
    const value = 'New filter text';
    const wrapper = shallow(<StudentFilter {...filters} setTextFilter={setTextFilter} setTagFilter={setTagFilter}/>);
    
    wrapper.find('input[name="textFilter"]').simulate('change', {
      target: { value },
    });
  
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });
  
  test('should set tag filter correctly', () => {
    const value = 'New tag';
    const wrapper = shallow(<StudentFilter {...filters} setTextFilter={setTextFilter} setTagFilter={setTagFilter}/>);
    
    wrapper.find('input[name="tagFilter"]').simulate('change', {
      target: { value },
    });
    
    expect(setTagFilter).toHaveBeenLastCalledWith(value);
  });
});
