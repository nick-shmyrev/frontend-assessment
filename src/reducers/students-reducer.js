const defaultState = [];

const studentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STUDENTS':
      return action.students.map(student => ({ ...student, tags: [] }));
      
    case 'SET_STUDENT_TAG':
      return state.map((student) => {
        if (student.email === action.email && !student.tags.includes(action.tag)) {
          return { ...student, tags: student.tags.concat(action.tag) };
        }
        return student;
      });
      
    default:
      return state;
  }
};

export default studentsReducer;
