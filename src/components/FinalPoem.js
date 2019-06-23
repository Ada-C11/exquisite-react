import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const finalButton = () => {
    return (
      <div className="FinalPoem__reveal-btn-container">
        <input onClick={props.onFinishCallback} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    )
  }

  return (
    <div className="FinalPoem">
      {!props.finish && finalButton()}
    </div>
  );
}

export default FinalPoem;
