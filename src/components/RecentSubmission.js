import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  return (
    <div className={`RecentSubmission ${props.line && !props.gameOver ? 'visible' : 'hidden'}`}>
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.line }</p>
    </div>
  );
}

export default RecentSubmission;
