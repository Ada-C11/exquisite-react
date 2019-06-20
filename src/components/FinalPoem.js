import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const poem = (lines) => {
    console.log(props.poem)
    const fullPoem = lines.map((line) => {
      console.log(line)
      return (<div> The {line.adjective1} {line.noun1} {line.adverb} {line.verb} the {line.adjective2} {line.noun2}
      </div>);
    });
    return fullPoem
  }

  // let display = 'hidden';
  const onButtonClick = () => {
    props.finalPoemClicked()

    console.log(props.isFinalPoemClicked)
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>
      
      <div className={!props.isFinalPoemClicked ? "FinalPoem__reveal-btn-container" : "hidden"}>
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onButtonClick} />
      </div>
      <div className={props.isFinalPoemClicked ? "FinalPoem__poem" : "hidden"}>
        {poem(props.poem)}
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  poem: PropTypes.array,
  isFinalPoemClicked: PropTypes.bool,
  finalPoemClicked: PropTypes.func
}

export default FinalPoem;
