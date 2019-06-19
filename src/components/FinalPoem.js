import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const finalPoem = props.poem.map((verse, index) => {
    return (<p key={index}> {verse} </p>)
  })

  console.log(props.poem)
  return (
    <div className="FinalPoem">
      {props.poemRevealed &&  <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {finalPoem}
      </section>}
      
      {!props.poemRevealed &&
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick= {props.onRevealPoemCallback} />

      </div>
      }
    </div>
  );
}

export default FinalPoem;
