import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {


  // linter says method isn't defined here, needs a const, but doesn't need one one Game.js
  // is it becuase its in a class in the other ones? and its not here
  // why doesn't it need a callback
  // and why is everything props and not this.props
  // used to have a onClick={this.onClickShowPoem} on line 48
  // const onClickShowPoem = () => {
    // when is it this.props vs just props?
    // stack overflow says its the same, buuuut isn't there something like 
    // So as the super(props) is called in the constructor. props and this.props are same. so,
    // just needs a this.? when theres a constructor? 
    // and we have constructors when we're saving state?
    // props.showFinalCallback()
  // }
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
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.showFinalCallback} />
      </div> }
      {(props.displayFinal) && < div > { formattedPoem } </div>}
      
    </div>
  );
}

FinalPoem.propTypes = {
  // will be the array
  finalSubmission: PropTypes.array.isRequired,
  // the callback function
  showFinalCallback: PropTypes.func.isRequired,
  // if we need to show the functiom or not
  displayFinal: PropTypes.bool.isRequired,
}

export default FinalPoem;


// Here’s how you might use the ternary operator in a JSX expression:
// const headline = (
//   <h1>
//     { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
//   </h1>
// );


// const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

// const tasty = (
//   <ul>
//     <li>Applesauce</li>
//     { !baby && <li>Pizza</li> }
//     { age > 15 && <li>Brussels Sprouts</li> }
//     { age > 20 && <li>Oysters</li> }
//     { age > 25 && <li>Grappa</li> }
//   </ul>
// );


// const strings = ['Home', 'Shop', 'About Me'];

// const listItems = strings.map(string => <li>{string}</li>);

// <ul>{listItems}</ul>

// On the last line of the example, note that {listItems} will evaluate to an array, because it’s the returned value of .map()! JSX <li>s don’t have to be in an array like this, but they can be.

// // This is fine in JSX, not in an explicit array:

// <ul>
//   <li>item 1</li>
//   <li>item 2</li>
//   <li>item 3</li>
// </ul>

// // This is also fine!

// const liArray = [
//   <li>item 1</li>, 
//   <li>item 2<li>, 
//   <li>item 3</li>
// ];

// <ul>{liArray}</ul>


// const peopleLis = people.map((person, i) => <li key={'person_'+i}>{person}</li>);

// const h1 = <h1>Hello world</h1>;
// can be rewritten without JSX, like this:
// const h1 = React.createElement(
//   "h1",
//   null,
//   "Hello, world"
// );
