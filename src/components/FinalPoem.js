import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  let displayPoem = '';
  let revealPoemButton = ''

  const onClickFinalPoem = () => {
    props.showFinalCallback()
  }


  if (props.showPoemState) { //equals true 
    displayPoem = props.finalPoem.map((line, i) => {
      return (
        <p key={i}>{line}</p>
      )
    })
  } else {
    displayPoem = ''
    revealPoemButton = <div className="FinalPoem__reveal-btn-container">
      <input onClick={onClickFinalPoem} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
    </div>
  }

  console.log('final poem in FinalPoem.js is', props.finalPoem)


  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {displayPoem}
      </section>
      {revealPoemButton}
    </div>
  );
}

export default FinalPoem;
