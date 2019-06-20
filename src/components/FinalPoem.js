import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  
  const handleClick = () => {
    props.handleClickCallback();
  }

  let buttonStyle = "FinalPoem__reveal-btn-container";
  let clickStyle = "FinalPoem__reveal-btn";
  if (props.finalized) {
    buttonStyle = "FinalPoem__reveal-btn-container hide";
    clickStyle = "FinalPoem__reveal-btn hide";
  }
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <article>{props.lines}</article>
      </section>

      <div className={buttonStyle}>
        <input onClick={handleClick} type="button" value="We are finished: Reveal the Poem" className={clickStyle} />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  lines: PropTypes.array
}

export default FinalPoem;
