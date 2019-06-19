import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poemToDisplay = props.poem.map((line, i) => {
    return (<li key={i} className="FinalPoem__line">{line}</li>)
  });

  console.log(`Here's the poem: ${poemToDisplay}`);

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <ul>{poemToDisplay}</ul>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
