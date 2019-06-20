import React from 'react';
import './FinalPoem.css';



const FinalPoem = (props) => {
 
  const onClickFinalPoem = () =>{

    props.onFinalPoemButtonCallback();

  }


  console.log(props.poem)

  const lines = function () {
    if (props.clicked){
      return props.poem.map((poem, index) => <p key={index}>{poem}</p>)
    }
  }
  
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {lines()}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value={props.value} className="FinalPoem__reveal-btn" onClick={onClickFinalPoem}/>
      </div>
    </div>
  );
}

export default FinalPoem;
