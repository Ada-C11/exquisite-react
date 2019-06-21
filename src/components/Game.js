import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';
import { isPatternLike } from '@babel/types';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playerCount: 1,
      recentSubmission: '',
      finalSubmission: [],
      displayFinal: false,
    };
  }

  addLine = (line) => {
    const verse = `${line.adj1} ${line.noun1} ${line.adverb} ${line.verb} the ${line.adj2} ${line.noun2}`;
    const finalSubmission = this.state.finalSubmission;
    finalSubmission.push(verse);
    //this.state.playercount then setting it to just this.playercount
    // why does it update asynchronously, like, I get it, but why does the final submission work and the others don't
    // and why if I set it up like that with 
    // let playerCount = this.state.playerCount;
    // playerCount = playerCount + 1
    // does it also not work setting state bellow iwth just playercount: playercount
    this.setState({
      playerCount: this.state.playerCount + 1,
      recentSubmission: verse,
      //not this.final submission, although that leaves it undefinied. why not just poop?
      finalSubmission: finalSubmission,
    })
    console.log(this.state);
    console.log("**********")
    console.log(this.state.finalSubmission)
  }

  showFinal = () => {
    // going to toggle on that submit final button
    this.setState({
      displayFinal: true,
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

        {/* {console.log(this.state)} */}
        {/* need a statement here that says will only show if state displayFinal is false and playerCount does not equal one then... render that below */}
        {(!this.state.displayFinal && this.state.playerCount !== 1) &&<RecentSubmission line={this.state.recentSubmission} />}
        {/* {console.log(this.state.playerCount)}
        {console.log("heeere")}
        {console.log(this.state.finalSubmission)}
        {console.log(this.state.finalSubmission)} */}
        {/* same conditional statement that has this disappear if displayFinal is true */}
        {console.log(this.state.displayFinal)}
        {(!this.state.displayFinal) &&
        <PlayerSubmissionForm addLineCallback={this.addLine} count={this.state.playerCount}/>}


        <FinalPoem finalSubmission={this.state.finalSubmission} displayFinal={this.state.displayFinal} showFinalCallback={this.showFinal} />

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
