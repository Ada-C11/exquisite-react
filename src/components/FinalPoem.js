import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  // const condition = props.submissions.length > 0
  const finalCondition = props.finished;

  const onFinalPoemClick = () => {
    props.onFinishedCallback ()
  }

  const submissions = props.submissions.map((line, i) => {
    return (
      <p key={i}>{line}</p>
    );
  });

  return (
    <div className="FinalPoem">
      { 
        finalCondition && (
          <section className="FinalPoem__poem">
            <h3>Final Poem</h3>
        
            <div>{submissions}</div>
         
          </section>
        )
      }
      {
        !finalCondition && (
          <div className="FinalPoem__reveal-btn-container">
            <input onClick={onFinalPoemClick} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
          </div>
        )
      }
    </div>
  );
}

export default FinalPoem;
