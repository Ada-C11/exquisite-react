import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const showPoem = () => {
    props.onShowPoemCallback();

  }

  const { display } = props;


  const fullPoem = props.finalPoem.map((line, i) => {
    return (
      <p key={i}>{line}</p>
    );
  })


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

FinalPoem.propTypes = {
  finalPoem: PropTypes.array.isRequired,
  onShowPoemCallback: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
};


export default FinalPoem;
