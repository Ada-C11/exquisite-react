import React from 'react';
import './FinalPoem.css';



const FinalPoem = (props) => {
 
  const onClickFinalPoem = () =>{

    props.onFinalPoemButtonCallback();

  }

  const lines = (word) => word.split("\n").map((t, i) => {
  
    return (<p key={i}>{t}</p>)

  });

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {lines(props.poem)}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value={props.value} className="FinalPoem__reveal-btn" onClick={onClickFinalPoem}/>
      </div>
    </div>
  );
}

export default FinalPoem;
