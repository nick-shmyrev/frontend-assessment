import React from 'react';
import { connect } from 'react-redux';

// Import components
import StudentItem from '../StudentItem/StudentItem';

const StudentsList = ({ students }) => (
  <ul>
    {
      students.length ?
        students.map(student => <StudentItem student={student} key={student.email}/>) :
        <p>No students data to display...</p>
    }
  </ul>
);

const mapStateToProps = state => ({
  students: state.students,
});

export default connect(mapStateToProps)(StudentsList);
