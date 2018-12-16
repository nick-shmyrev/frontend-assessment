import React from 'react';
import { connect } from 'react-redux';
import { setStudentTag } from '../../actions/students-actions';

// Import styles
import style from './StudentItem.css';

export class StudentItem extends React.Component {
  state = {
    gradesShown: false,
  };
  
  getAverage = grades => (grades.reduce((a, c) => a + Number(c), 0) / grades.length);
  
  handleDetailsClick = () => {
    this.setState(prevState => {
      return { gradesShown: !prevState.gradesShown };
    });
  };
  
  renderGrades = () => (
    <div className={style['test-details']}>
      {this.props.grades.map((grade, index) => (
        <p key={index}>Test{index + 1}&nbsp;&nbsp;&nbsp;&nbsp;{grade}</p>
      ))}
    </div>
  );
  
  handleTagSubmit = (e) => {
    e.preventDefault();
    
    if (e.target['tagInput'].value.trim().length > 0) {
      this.props.setStudentTag(this.props.email, e.target['tagInput'].value.trim());
    }
    e.target['tagInput'].value = '';
  };
  
  renderTags = () => (
    <div>
      {this.props.tags.length > 0 && (
        this.props.tags.map(tag => <div key={tag} className={style.tag}>{tag}</div>)
      )}
      <form onSubmit={this.handleTagSubmit}>
        <input type="text" name="tagInput"/>
      </form>
    </div>
  );
  
  render() {
    return (
      <div className={style['student-item']}>
        <div className={[style.flex, style['flex-between']].join(' ')}>
          <div className={style['flex-container']}>
            <img
              src={this.props.pic}
              alt={this.props.firstName}
              className={style['student-pic']}
            />
  
            <div className="student-details">
              <h1 className={style['student-name']}>{this.props.firstName} {this.props.lastName}</h1>
    
              <div className={style['student-details']}>
                <p>Email: {this.props.email}</p>
                <p>Company: {this.props.company}</p>
                <p>Skill: {this.props.skill}</p>
                <p>Average: {this.getAverage(this.props.grades)}%</p>
                
                {this.state.gradesShown && (
                  <div>
                    {this.renderGrades()}
                    {this.renderTags()}
                  </div>
                )}
                
              </div>
            </div>
          </div>
          
          <div
            className={[style['details-icon'], this.state.gradesShown ? style['details-icon-open'] : null].join(' ')}
            onClick={this.handleDetailsClick}
          >
            <div/>
            <div/>
          </div>
    
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setStudentTag: (email, tag) => dispatch(setStudentTag(email, tag)),
});

export default connect(undefined, mapDispatchToProps)(StudentItem);
