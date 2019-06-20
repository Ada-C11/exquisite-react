import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const finalPoemLines = props.submissions.map((line, i) => {
    return <p key={i}>{line}</p>;
  });

  // const onRevealFinalPoemClick = () => {
  //   props.revealFinalPoemCallback(finalPoemLines)
  // }
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {finalPoemLines}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input
          type="button"
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
        // onClick={props.revealFinalPoem}
        />
      </div>
    </div>
  );
}

export default FinalPoem;
