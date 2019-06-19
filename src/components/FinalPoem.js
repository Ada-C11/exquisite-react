import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  let formattedPoem = '';

  if (props.revealState){ //equals true 
    formattedPoem = props.finalPoem.map((line, i) => {
      return (
        <p key={i}>{line}</p>
      )
    })
  } else {
    formattedPoem = ''
  }


  const onClickFinalPoem = () => {
    props.showFinalCallback()
  }

  console.log('final poem in FinalPoem.js is', props.finalPoem)


  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {/* {displayFinal} */}
        {formattedPoem}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input onClick={onClickFinalPoem} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
