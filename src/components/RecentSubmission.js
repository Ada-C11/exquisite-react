import React from 'react';
import './RecentSubmission.css';

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

export default RecentSubmission;
