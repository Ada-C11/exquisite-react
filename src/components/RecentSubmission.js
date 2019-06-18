import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const { verse } = props;
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{verse}</p>
    </div>
  );
}

export default RecentSubmission;
