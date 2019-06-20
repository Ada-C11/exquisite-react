import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const currentVerses = props.currentPoem.map((verse, index) => {
    return (<p key={index}>{verse}</p>)
  })
    return (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">{currentVerses.pop()}</p>     
      </div>
  );
}
export default RecentSubmission;


