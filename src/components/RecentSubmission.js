import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  if (props.lastVerse) {
    return (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>

        <p className="RecentSubmission__submission"> 
           The {props.lastVerse.adjective} {props.lastVerse.noun} {props.lastVerse.adverb} {props.lastVerse.verb} the {props.lastVerse.adjective2} {props.lastVerse.noun2}.
        </p>

      </div>
  );
} else {
    return null
}
}
export default RecentSubmission;


