import { setStudents, setStudentTag } from './students-actions';

describe('Student actions', () => {
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
  
  test('setStudents should return correct action object', () => {
    const action = setStudents(students);
    
    expect(action).toEqual({
      type: 'SET_STUDENTS',
      students,
    });
  });
  
  test('setStudentTag should return correct action object', () => {
    const tag = 'New tag';
    const action = setStudentTag(students[0].email, tag);
    
    expect(action).toEqual({
      type: 'SET_STUDENT_TAG',
      email: students[0].email,
      tag,
    });
  });
});
