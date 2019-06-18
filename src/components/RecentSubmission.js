import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
console.log('props.submission noun2 is', props.submission.noun2)
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission"> {props.submission} </p>
    </div>
  );
}

export default RecentSubmission;
