import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  const poem = props.final.map((line, i) => {
    return (
      <div key={i}>
        {line}
      </div>
    );
  });

  return (
    <div className="FinalPoem">
      {props.show && <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>{poem}</div>
      </section>}

      {!props.show && <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.showFinalCallback}/>
      </div>}
    </div>
  );
}

FinalPoem.propTypes = {
  final: PropTypes.array,
  show: PropTypes.bool,
  showFinalCallback: PropTypes.func,
};

export default FinalPoem;
