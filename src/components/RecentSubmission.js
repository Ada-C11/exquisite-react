import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  if (props.lastLine) {
    return (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">The {props.lastLine.the1} {props.lastLine.adj1} {props.lastLine.noun1} {props.lastLine.adv} {props.lastLine.verb} the {props.lastLine.the2} {props.lastLine.adj2} {props.lastLine.noun2}{props.lastLine.period}.</p>
      </div>
    );
  } else {
    return null
  };
}

export default RecentSubmission;
