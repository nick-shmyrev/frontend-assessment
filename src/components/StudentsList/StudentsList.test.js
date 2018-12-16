import React from 'react';
import { shallow } from 'enzyme';
import { StudentsList } from './StudentsList';

describe('StudentsList component', () => {
  const students = [{
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
    skill: "Oracle"
  },
  {
    city: "Sanghan",
    company: "Avamm",
    email: "cboards1@weibo.com",
    firstName: "Clarke",
    grades: [
      "75",
      "89",
      "95",
      "93",
      "99",
      "82",
      "89",
      "76"
    ],
    id: "2",
    lastName: "Boards",
    pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg",
    skill: "Sports"
  },
  ];
  
  test('should render without students', () => {
    const wrapper = shallow(<StudentsList students={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should render with students provided', () => {
    const wrapper = shallow(<StudentsList students={students}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
