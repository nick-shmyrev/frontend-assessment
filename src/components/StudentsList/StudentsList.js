import React from 'react';
import { connect } from 'react-redux';
import getVisibleStudents from './../../store/selectors/students-selectors';

// Import components
import StudentItem from '../StudentItem/StudentItem';

// Import styles
import style from './StudentList.css';

const StudentsList = ({ students }) => (
  <ul className={style['students-list']}>
    {
      students.length ?
        students.map(student => <StudentItem {...student} key={student.email}/>) :
        <p>No students data to display...</p>
    }
  </ul>
);

const mapStateToProps = ({ students, filters }) => ({
  students: getVisibleStudents(students, filters),
});

export default connect(mapStateToProps)(StudentsList);
