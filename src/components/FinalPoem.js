import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const condition = props.submissions.length > 0

  const submissions = props.submissions.map((line) => {
    return (
      <p>{line}</p>
    );
  });

  return (
    <div className="FinalPoem">
      
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        { 
          condition && (
            <div>{submissions}</div>
          )
        }
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>

    </div>
  );
}

export default FinalPoem;
