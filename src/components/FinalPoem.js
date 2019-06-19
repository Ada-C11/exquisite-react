import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

 

  const onClickFinalPoem = () => {
    props.showFinalCallback()
  }

  const finalDisplay = () => {
    if (props.showPoemState) { //equals true 
      return  props.finalPoem.map(
        (line, i) => <p key={i}>{line}</p>
      )
    } else {
      return (
        <div className="FinalPoem__reveal-btn-container">
          <input onClick={onClickFinalPoem} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
        </div>
      )
    }

  }


  console.log('final poem in FinalPoem.js is', props.finalPoem)


  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {/* {displayPoem} */}
      </section>
      {finalDisplay()}
    </div>
  );
}

export default FinalPoem;
