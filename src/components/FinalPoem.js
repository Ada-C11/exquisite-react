import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poem = (lines) => {
    console.log(props.poem)
    const fullPoem = lines.map((line) => {
      console.log(line)
      return (<div> {line.adjective1} {line.noun1} {line.adverb} {line.verb} {line.adjective2} {line.noun2}
      </div>);
    });
    return fullPoem
  }

  const onButtonClick = () => {
    
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={ onButtonClick } />
      </div>
      <div className="FinalPoem__poem">
        {poem(props.poem)}
      </div>
    </div>
  );
}

export default FinalPoem;
