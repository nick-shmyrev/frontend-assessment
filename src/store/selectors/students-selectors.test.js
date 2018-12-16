import getVisibleStudents from './students-selectors';

describe('getVisibleStudents selectors', () => {
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
    tags: ['new tag'],
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
    tags: ['Some text', 'new tag'],
  },
  ];
  
  test('should filter by text', () => {
    const filters = {
      text: 'Clarke',
      tag: '',
    };
    
    const result = getVisibleStudents(students, filters);
    
    expect(result).toEqual([students[1]]);
  });
  
  test('should filter by tag', () => {
    const filters = {
      text: '',
      tag: 'text',
    };
    
    const result = getVisibleStudents(students, filters);
    
    expect(result).toEqual([students[1]]);
  });
});
