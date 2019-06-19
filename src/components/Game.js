import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recentLine: '',
      fullPoem: [],
      playerNumber: 1,
      displayFinalPoem: false,
    }
  }
  addLine = ({ adj1, noun1, adv, verb, adj2, noun2}) => {
    let currentLine = this.state.recentLine;

    let newLine = `The ${adj1} ${noun1} ${adv} ${verb} the ${adj2} ${noun2}`;

    currentLine = newLine;
    this.state.fullPoem.push(currentLine);

    this.setState({
      recentLine: currentLine,
      fullPoem: this.state.fullPoem,
      playerNumber: this.state.playerNumber + 1,
    });
  }

  // This works but requires that the button in FinalPoem be moved to Game and the component to be moved inside this function for rendering and then calling this function where the FinalPoem component was orignally called in Game.
  // renderFinalPoem = () => {
  //   if (this.state.displayFinalPoem !== false){
  //     return(
  //       < FinalPoem poem={this.state.fullPoem} />
  //     );
  //   }
  // }

  toggleRevealPoem = () => {
    this.setState({
      displayFinalPoem: !this.state.displayFinalPoem,
    });
  }


  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        {!this.state.displayFinalPoem && <RecentSubmission 
          mostRecentLine={this.state.recentLine}
        />}

        {/* When the Reveal Poem button is clicked, the form is hidden */}
        {!this.state.displayFinalPoem && <PlayerSubmissionForm 
          addLineCallback={this.addLine}
          playerNumber={this.state.playerNumber}
        />}

        <FinalPoem
          poem={this.state.fullPoem}  
          displayPoem={this.state.displayFinalPoem}
          toggleRevealPoemCallback={this.toggleRevealPoem}
        />

         {/* Renders the Final Poem component by calling the renderFinalPoem function */}
          {/* {this.renderFinalPoem()} */}

        {/* <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.toggleRevealPoem} />
        </div> */}

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
