import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
if (!props.showPoemState){ 
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission"> {props.submission} </p>
    </div>
  );
} else {
  return (
    <div></div>
  )
}
 
}

export default RecentSubmission;
