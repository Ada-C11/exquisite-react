import React from "react";
import "./FinalPoem.css";

const FinalPoem = props => {
  const onSelectClicked = () => {
    props.onPoemCompleteCallback();
  };

  const displayPoem = props.wholePoem ? null : (
    <input
      type="button"
      value="We are finished: Reveal the Poem"
      className="FinalPoem__reveal-btn"
      onClick={onSelectClicked}
    />
  );

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.wholePoem}
      </section>

      <div className="FinalPoem__reveal-btn-container">{displayPoem}</div>
    </div>
  );
};

export default FinalPoem;
