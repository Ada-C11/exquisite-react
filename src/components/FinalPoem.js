import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const showPoem = () => {
    console.log('In show poem');
    props.onShowPoemCallback();

  }

  const { display } = props;


  const fullPoem = props.finalPoem.map((line, i) => {
    return (
      <p key={i}>{line}</p>
    );
  })

  // let fullPoem;

  // if (true) {
  //   fullPoem = props.finalPoem.map((line, i) => {
  //     return (
  //       <p key={i}>{line}</p>
  //       );
  //     })} else {
  //       fullPoem = ''
  //     }


  return (
    <div className="FinalPoem">
      {display && <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

        <div>{fullPoem}</div>
      </section>}

      {!display && <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={showPoem} />
      </div>}
    </div>
  );
}

export default FinalPoem;
