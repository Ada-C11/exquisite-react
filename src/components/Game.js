import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      poem: [],
      player: 0,
    }
  }

    addLine = (newLine) => {
      const newState = {...this.state};
      const newPoem = newState.poem;
      // console.log("this is:", newLine);
      // console.log("this is a poem in array:",newPoem);
      newPoem.push(newLine);

      this.setState(newState);
      this.setState({
        player: this.state.player + 1
      });
    };

  render() {

    const exampleFormat= FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    console.log(this.state.poem[this.state.poem.length - 1]);
    const startOfPoetry = this.state.poem.length === 0 ? false : true;
    const poetryInProgress = !this.state.finalize;


    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

         {startOfPoetry &&
        <RecentSubmission 
         previousLine={this.state.poem[this.state.poem.length - 1]}/>}

        {poetryInProgress &&  
        <PlayerSubmissionForm 
        addLineCallback={this.addLine} playerNumber={this.state.player}
        fields={FIELDS}/>}

        <FinalPoem poem={this.state.poem} revealPoem={this.state.finalize} revealPoemCallback={() =>this.setState({finalize: true})}/>

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
