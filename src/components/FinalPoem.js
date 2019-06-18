import React from 'react';
import './FinalPoem.css';
import RecentSubmission from './RecentSubmission';

const generateVerseElements = (poemVerses) => {
  return poemVerses.map((verse, i) => {
    return (
      <div key={i}>{verse}</div>
    )
  })
}
const FinalPoem = (props) => {
  const { verses } = props;
  const verseElements = generateVerseElements(verses);
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{verseElements}</div>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
