import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
  const finalPoem = props.poem.map((verse, index) => {
    return (<p key={index}>{verse}</p>)
  })

  return (
    <div className="FinalPoem">
      { props.finalized && 
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {finalPoem}
        </section>
      }

      { !props.finalized && finalPoem.length >= 1 &&
        <div className="FinalPoem__reveal-btn-container">
          <input onClick={props.revealPoemCallback} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
        </div>
      }
    </div>
  );
}

export default FinalPoem;
