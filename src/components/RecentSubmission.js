import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
        {props.mostRecentLine}
      <p className="RecentSubmission__submission">{  }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  mostRecentLine: PropTypes.string.isRequired,
};
export default RecentSubmission;
