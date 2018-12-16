import React from 'react';

// Import styles
import style from './StudentItem.css';

const StudentItem = ({ student }) => {
  const getAverage = grades => (grades.reduce((a, c) => a + Number(c), 0) / grades.length);
  const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
  
  return (
    <div className={style['student-item']}>
      <div className={style['flex-container']}>
        
        <img
          src={student.pic}
          alt={getFullName(student)}
          className={style['student-pic']}
        />
        
        <div className="student-details">
          <h1 className={style['student-name']}>{getFullName(student)}</h1>
          
          <div className={style['student-details']}>
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: {getAverage(student.grades)}%</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default StudentItem;
