import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = ({ recentSubmission }) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{recentSubmission}</p>
    </div>
  );
};

RecentSubmission.propTypes = {
  recentSubmission: PropTypes.string.isRequired,
};

export default RecentSubmission;
