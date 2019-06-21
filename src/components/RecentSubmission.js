import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  console.log(`Lastline: ${props.previousLine}`);
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.previousLine }</p>
    </div>
  );
}

export default RecentSubmission;
