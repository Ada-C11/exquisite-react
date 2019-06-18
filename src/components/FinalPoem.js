import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const fullPoem = props.poem.map((verse, i) => {
    return (
      <p key={i}> {verse} </p>

    )
  })

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {fullPoem}
      </section>

      {/* <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={showFullPoem} />
      </div> */}
    </div>
  );
}

export default FinalPoem;
