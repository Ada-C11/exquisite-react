import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poem = props.submissions.map((line, i) => {
    return <p key={i}> {line}</p>
  })
  const handleClick = () => {
    console.log("I am clicking")
    props.poemCallback();
  }
  const poemButton =
    <div className="FinalPoem__reveal-btn-container" >
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={handleClick} />
    </div>

  const showpoem =
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      <div>{poem}</div>
      </section>;
      const content = props.isSubmitted? showpoem : poemButton

      return (
    <div className="FinalPoem">
      {content}

    </div>
      );
    }
    
    export default FinalPoem;
