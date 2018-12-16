import React from 'react';

const StudentItem = ({ student }) => {
  const getAverage = grades => (grades.reduce((a, c) => a + Number(c), 0) / grades.length);
  const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
  
  return (
    <div>
      <img src={student.pic} alt={getFullName(student)}/>
      <h2>{getFullName(student)}</h2>
      <p>Email: {student.email}</p>
      <p>Company: {student.company}</p>
      <p>Skill: {student.skill}</p>
      <p>Average: {getAverage(student.grades)}%</p>
    </div>
  );
};

export default StudentItem;
