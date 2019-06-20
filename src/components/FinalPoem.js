import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {...props}
  // }

const allPoemLines = props.poemLines.map((line, i) => {
  return <p key={i}> {line} </p>;
});

const onRevealFinalPoem = () => {

  props.poemFinishedCallback(true);
}

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">

        { props.poemFinished &&
          (<div><h3>Final Poem</h3>
          {allPoemLines}</div> ) }
      </section>

      <div className="FinalPoem__reveal-btn-container">
        {!props.poemFinished &&
          <input type="button"
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"


          onClick={onRevealFinalPoem}
          />
        }



      </div>
    </div>
  );
}

export default FinalPoem;
