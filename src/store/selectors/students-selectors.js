const getVisibleStudents = (students, filters) => {
  const { text } = filters;
  
  return students.filter((student) => {
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
    
    return fullName.includes(text.toLowerCase());
  });
};

export default getVisibleStudents;
