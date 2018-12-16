const getVisibleStudents = (students, filters) => {
  const { text, tag } = filters;
  
  return students.filter((student) => {
    const textFilter = (text.length > 0) ? `${student.firstName} ${student.lastName}`.toLowerCase().includes(text.toLowerCase()) : true;
    const tagFilter = (tag.length > 0) ? student.tags.join(' ').toLowerCase().includes(tag.toLowerCase()) : true;
    
    return textFilter && tagFilter;
  });
};

export default getVisibleStudents;
