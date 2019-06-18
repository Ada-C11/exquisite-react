import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const condition = props.submissions.length > 0

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
        { 
          condition && (
            <section>{props.submissions}</section>
          )
        }
      </div>
    </div>
  );
}

export default FinalPoem;
