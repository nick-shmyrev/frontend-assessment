import React from 'react';
import { shallow } from 'enzyme';
import { StudentItem } from './StudentItem';

describe('StudentItem component', () => {
  const student = {
    city: "Fushë-Muhurr",
    company: "Yadel",
    email: "iorton0@imdb.com",
    firstName: "Ingaberg",
    grades: [
      "78",
      "100",
      "92",
      "86",
      "89",
      "88",
      "91",
      "87"
    ],
    id: "1",
    lastName: "Orton",
    pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg",
    skill: "Oracle",
    tags: ['tag 1'],
  };
  const setStudentTag = jest.fn();
  
  
  test('should render correctly', () => {
    const wrapper = shallow(<StudentItem {...student} setStudentTag={setStudentTag} />);
    
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should set student tag correctly', () => {
    const value = 'tag';
    const wrapper = shallow(<StudentItem {...student} setStudentTag={setStudentTag} />);
    
    wrapper.find('.details-icon').simulate('click');
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        tagInput: { value },
      },
    });
    
    expect(setStudentTag).toHaveBeenLastCalledWith(student.email, value);
  });
});
