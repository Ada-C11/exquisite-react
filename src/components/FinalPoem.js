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

  let poemContent;
  let poemClass; 

  if (props.revealed) {
    poemContent = poem;
    poemClass = "FinalPoem__poem"
  }
  else {
    poemContent = poemButton;
    poemClass = 'FinalPoem__unrevealed'
  }


  return (
    <div className="FinalPoem">
      <section className={poemClass}>
        <h3>Final Poem</h3>
        {props.peom}
      </section>

      {poemContent}
    </div>
  );
}

export default FinalPoem;
