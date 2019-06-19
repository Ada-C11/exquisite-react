import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const finalPoem = props.poem.map((verse, index) => {
    return (<p key={index}>{verse}</p>)
  })

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <div className="RecentSubmission__submission">{finalPoem.pop()}</div>
    </div>
  );
}

export default RecentSubmission;
