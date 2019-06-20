import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      {props.recentPoem !== '' ? <h3>The Most Recent Submission</h3> : ''}
      <p className="RecentSubmission__submission">{ props.recentPoem }</p>
    </div>
  );
};

RecentSubmission.propTypes = {
  recentPoem: PropTypes.string,
};

export default RecentSubmission;
