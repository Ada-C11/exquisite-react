import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const showPoemButton =
    <div className="FinalPoem__reveal-btn-container">
      <input
        type="button"
        value="We are finished: Reveal the Poem"
        className="FinalPoem__reveal-btn"
        onClick={props.showFinalPoem}
      />
    </div>;

  const finalPoemLines = props.submissions.map((line, i) => {
    return <p key={i}>{line}</p>;
  });

  const finalPoem =
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {finalPoemLines}
    </section>;

  const gameDisplay = props.poemFinished ? finalPoem : showPoemButton;

  return (
    <div className="FinalPoem">
      {gameDisplay}
    </div>
  );
}

export default FinalPoem;
