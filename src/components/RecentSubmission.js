import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const lastLine = props.lastLine
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      {lastLine}
      <p className="RecentSubmission__submission">{  }</p>
    </div>
  );
}

export default RecentSubmission;
