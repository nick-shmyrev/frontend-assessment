import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../actions/filters-actions';

// Import styles
import style from './StudentFilter.css';

const StudentsFilter = (props) => {
  const onTextChange = (e) => {
    const text = e.target.value;
    props.setTextFilter(text);
  };
  
  return (
    <div className={style.filters}>
      <input
        name="textFilter"
        type="text"
        placeholder="Search by name"
        value={props.textFilter}
        onChange={onTextChange}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  textFilter: state.filters.text,
});
const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentsFilter);
