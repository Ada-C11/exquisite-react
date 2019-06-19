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
           {/* The {props.lastVerse.adjective} {props.lastVerse.noun} {props.lastVerse.adverb} {props.lastVerse.verb} the {props.lastVerse.adjective2} {props.lastVerse.noun2}. */}
      </div>
  );
}
export default RecentSubmission;


