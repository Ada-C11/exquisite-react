import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      RecentSubmission: '',
      finalSubmission: [],
    };
  }

  addLine = (line) => {
    console.log(line);
    console.log(line.adj1);
    // console.log(this.state.line.adj1);
    // const verse = `${this.state.line.adj1} ${this.state.noun1} ${this.state.adverb} ${this.state.verb} ${this.state.adj2} ${this.state.noun2}`;
    // console.log(verse);
    const verse1 = `${line.adj1} ${line.noun1} ${line.adverb} ${line.verb} ${line.adj2} ${line.noun2}`;
    console.log(verse1);
    // students.push(student);
    // this.setState({
    //   students,
    //   message: `${student.fullName} is added`,
    //   // students: students,
    // });
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

        <RecentSubmission />

        <PlayerSubmissionForm addLineCallback={this.addLine}/>

        <FinalPoem />

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
