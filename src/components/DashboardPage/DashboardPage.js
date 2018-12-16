import React from 'react';

// Import components
import StudentFilter from '../StudentFilter/StudentFilter';
import StudentsList from '../StudentsList/StudentsList';

// Import styles
import style from './DashboardPage.css';

const HatchwaysApp = () => (
  <div className={style.dashboard}>
    <StudentFilter style={style.filters}/>
    <div className={style['list-container']}>
      <StudentsList/>
    </div>
  </div>
);

export default HatchwaysApp;
