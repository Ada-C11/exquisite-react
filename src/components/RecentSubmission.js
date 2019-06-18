import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = ({ recentSubmission }) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{recentSubmission}</p>
    </div>
  );
};

export default RecentSubmission;
