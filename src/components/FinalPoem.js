import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = ({ finalPoemDisplayCallback, poem, poemComplete }) => {
  return (
    <div className="FinalPoem">
      {poemComplete && (
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {formatPoem(poem)}
        </section>
      )}
      {!poemComplete && (
        <div className="FinalPoem__reveal-btn-container">
          <input
            type="button"
            value="We are finished: Reveal the Poem"
            className="FinalPoem__reveal-btn"
            onClick={() => finalPoemDisplayCallback()}
          />
        </div>
      )}
    </div>
  );
};

const formatPoem = poemArray => {
  return poemArray.map(line => {
    return <p> {line} </p>;
  });
};

FinalPoem.propTypes = {
  finalPoemDisplayCallback: PropTypes.func.isRequired,
  poem: PropTypes.arrayOf(PropTypes.string).isRequired,
  poemComplete: PropTypes.bool.isRequired,
};

export default FinalPoem;
