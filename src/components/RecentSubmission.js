import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  console.log(props.numberofSubmissions)
  let display = ""
  if (props.numberofSubmissions < 1 || props.isFinalPoemClicked === true) {
    display = `hidden`
  }
  return (
    <div className={`RecentSubmission ${display}`} >
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission"> The {`${props.line.adjective1} ${props.line.noun1} ${props.line.adverb} ${props.line.verb}`} the {`${props.line.adjective2} ${props.line.noun2}`}</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  numberofSubmissions: PropTypes.number.isRequired,
  isFinalPoemClicked: PropTypes.bool,
  line: PropTypes.array
}

export default RecentSubmission;
