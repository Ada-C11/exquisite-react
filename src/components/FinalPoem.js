import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poem = props.sentences.map((sentence) => {
    console.log(sentence)
    return (<p>{sentence}</p>)
  });


  const poemButton = (<div className="FinalPoem__reveal-btn-container">
    <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.finishPoemCallback} />
  </div>)

  const poemContent = props.revealed ? poem : poemButton

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.peom}
      </section>

      {poemContent}
    </div>
  );
}

export default FinalPoem;
