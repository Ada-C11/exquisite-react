import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {


  // linter says method isn't defined here, needs a const, but doesn't need one one Game.js
  // is it becuase its in a class in the other ones? and its not here
  // why doesn't it need a callback
  // and why is everything props and not this.props
  // used to have a onClick={this.onClickShowPoem} on line 48
  const onClickShowPoem = () => {
    // when is it this.props vs just props?
    // stack overflow says its the same, buuuut isn't there something like 
    // So as the super(props) is called in the constructor. props and this.props are same. so,
    // just needs a this.? when theres a constructor? 
    // and we have constructors when we're saving state?
    props.showFinalCallback()
  }
  //map the lines here
  //all p's so need to be in a div
  //this props?
  //needs to be reachable
  // turm into a ternary 
  // that returns either the button, or returns the formatted poem
  // if (props.displayFinal) {
  //   const renderedPoem = props.finalSubmission.map((line, i) => 
  //  <p key={i}>{line}</p>
  //  </br>
    // const formattedPoem = props.displayFinal ? 'kitty' : 'doggy'
  //   console.log(props)
  //   console.log("made it to final poem")
  // console.log(props.finalSubmission);
  const formattedPoem = props.finalSubmission.map((line, i) => 
   <p key={i}>{line}</p>
  //  </br>
  )

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>
      {console.log(props.displayFinal)}
      {(!props.displayFinal) && <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={onClickShowPoem} />
      </div> }
      {(props.displayFinal) && < div > { formattedPoem } </div>}
      
    </div>
  );
}

// so I don't needs a this.onClickShowPoem BECAUSE its a not a member method, just a local variable, 
// because its functional, use this for classical functions, and if its going to have state

FinalPoem.propTypes = {
  // will be the array
  finalSubmission: PropTypes.array.isRequired,
  // the callback function
  showFinalCallback: PropTypes.func.isRequired,
  // if we need to show the functiom or not
  displayFinal: PropTypes.bool.isRequired,
}

export default FinalPoem;


