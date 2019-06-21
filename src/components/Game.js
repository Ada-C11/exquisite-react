import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recentSubmission: "",
      finalPoem: [],
      display: true

    }
  }
  
  displayCallback = () => {
    this.setState({
      display: false,
    })
  }

  addPoemLineCallback = (words) => {
     let line = FIELDS.map((field) => {
       if(field.key) {
         if (words[field.key] !== "") {
         return words[field.key]
         }
       } else {
         return field;
       }                              
     }).filter(word => word !== undefined ).join(" ");

     let updatedPoem = this.state.finalPoem;
     updatedPoem.push(line)
     this.setState({
       recentSubmission: line,
       finalPoem: updatedPoem
     })
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
        {
          this.state.display?
            <section>
            <RecentSubmission recentSubmission={this.state.recentSubmission}/>

            <PlayerSubmissionForm addPoemLineCallback={this.addPoemLineCallback} />
            </section>

            :null
        }

        <FinalPoem 
          
          poem ={this.state.finalPoem}
          displayCallback={this.displayCallback}
          display={this.state.display}
        />

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
