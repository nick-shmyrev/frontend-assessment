const setStudents = students => ({
  type: 'SET_STUDENTS',
  students,
});

const setStudentTag = (email, tag) => ({
  type: 'SET_STUDENT_TAG',
  email,
  tag,
});

export { setStudents, setStudentTag };
