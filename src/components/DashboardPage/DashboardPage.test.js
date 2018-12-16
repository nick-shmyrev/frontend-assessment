import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from './DashboardPage';

describe('DashboardPage component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<DashboardPage/>);
    expect(wrapper).toMatchSnapshot();
  });
});
