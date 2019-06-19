import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  if(props.hidden) {
    return null;
  }
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.mostRecentInput }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  hidden: PropTypes.bool.isRequired,
  mostRecentInput: PropTypes.string.isRequired,
}

export default RecentSubmission;
