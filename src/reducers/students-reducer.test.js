import studentsReducer from './students-reducer';

describe('Students reducer', () => {
  const defaultState = [];
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
    skill: "Oracle",
    tags: [],
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
    skill: "Sports",
    tags: [],
    },
  ];
  
  test('should set default students value', () => {
    const state = studentsReducer(undefined, { type: '@@INIT' });
    
    expect(state).toEqual(defaultState);
  });
  
  test('should set students value', () => {
    const state = studentsReducer(undefined, { type: 'SET_STUDENTS', students });
  
    expect(state).toEqual(students.map(student => ({ ...student, tags: [] })));
  });
  
  test('should set student tag', () => {
    const email = students[0].email;
    const tag = 'New tag';
    const state = studentsReducer(students, { type: 'SET_STUDENT_TAG', email, tag });
  
    expect(state.find(student => student.email === email)).toEqual({ ...students[0], tags: [tag] });
  });
  
  test('should not set the same student tag twice', () => {
    const tag = 'New tag';
    const student = [{
      city: "Krajan",
      company: "Mybuzz",
      email: "bskitt3@aboutads.info",
      firstName: "Berti",
      grades: [
        "88",
        "93",
        "92",
        "81",
        "95",
        "98",
        "77",
        "94"
      ],
      id: "4",
      lastName: "Skitt",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg",
      skill: "Nutrition Education",
      tags: [tag],
    }];
    const state = studentsReducer(student, { type: 'SET_STUDENT_TAG', email: student[0].email, tag });
    
    expect(state).toEqual([{ ...student[0], tags: [tag] }]);
  });
});
