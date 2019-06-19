import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      finalized: false,
    };
  }

  addLine = (line) => {
    const lines = this.state.lines;
    lines.push(<p key={this.state.lines.length + 1}>{line}</p>);
    this.setState({
      lines,
    });
  }

  handleClickFinalPoem = () => {
    this.setState({
      finalized: true,
    });
  }


  render() {
    // console.log(this.state);
    let lines;
    let submissionForm;
    let recentSubmission;
    let finalized;
    if (this.state.finalized){
      lines = this.state.lines;
      submissionForm = '';
      finalized = true;
    } else {
      lines = '';
      submissionForm = (<PlayerSubmissionForm 
        addLineCallback={this.addLine}/>);
      recentSubmission = (<RecentSubmission />);
      finalized = false;
      
    }

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

        {recentSubmission}

        {submissionForm}

        <FinalPoem 
        lines={lines}
        handleClickCallback={this.handleClickFinalPoem}
        finalized = {finalized}
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
