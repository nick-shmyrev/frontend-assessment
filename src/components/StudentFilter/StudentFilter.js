import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setTagFilter } from '../../actions/filters-actions';

// Import styles
import style from './StudentFilter.css';

export const StudentFilter = (props) => {
  const onTextFilterChange = (e) => {
    const text = e.target.value;
    props.setTextFilter(text);
  };
  const onTagFilterChange = (e) => {
    const tag = e.target.value;
    props.setTagFilter(tag);
  };
  
  return (
    <div className={style.filters}>
      <input
        name="textFilter"
        type="text"
        placeholder="Search by name"
        value={props.textFilter}
        onChange={onTextFilterChange}
      />
      <input
        name="tagFilter"
        type="text"
        placeholder="Search by tag"
        value={props.tagFilter}
        onChange={onTagFilterChange}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  textFilter: state.filters.text,
  tagFilter: state.filters.tag,
});
const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setTagFilter: tag => dispatch(setTagFilter(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentFilter);
