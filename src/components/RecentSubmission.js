import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  if (props.lastLine) {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">The {props.lastLine.adj1} {props.lastLine.noun1} {props.lastLine.adv} {props.lastLine.verb} the {props.lastLine.adj2} {props.lastLine.noun2}.</p>
    </div>
  );
} else {
  return null
}
}

export default RecentSubmission;
