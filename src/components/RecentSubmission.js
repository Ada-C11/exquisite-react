import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.showSubmission }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  showSubmission: PropTypes.string,
}

export default RecentSubmission;
