import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <section className="RecentSubmission__submission">{ props.lastLine }</section>
    </div>
  );
}

RecentSubmission.propTypes = {
  lastLine: PropTypes.array
}

export default RecentSubmission;
