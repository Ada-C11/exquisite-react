import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const condition = props.mostRecentSubmission !== undefined;
  console.log(condition);

  return (
    <div className="RecentSubmission">
      {
        condition && !props.finished && (
          <div>
            <h3>The Most Recent Submission</h3>
            <p className="RecentSubmission__submission">{props.mostRecentSubmission}</p>
          </div>
        )
      }
    </div>
  );
}

export default RecentSubmission;
