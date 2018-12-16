const defaultState = [];

const studentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STUDENTS':
      return action.students;
      
    default:
      return state;
  }
};

export default studentsReducer;
