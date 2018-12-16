import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store/redux-store';
import { setStudents } from './actions/students-actions';

// Import global styles
import './styles/styles.css';

// Import major components
import DashboardPage from './components/DashboardPage/DashboardPage';

// Display loading message
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// Load students data
axios
  .get('https://www.hatchways.io/api/assessment/students')
  .then((res) => {
    const { students } = res.data;
    
    // Set App state
    store.dispatch(setStudents(students));
  })
  .then(() => {
    // Display app with students data
    ReactDOM.render(<Provider store={store}><DashboardPage/></Provider>, document.getElementById('app'));
  })
  .catch(e => console.log(e));

