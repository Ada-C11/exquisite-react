import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      poem: ["hello"],
      finished: undefined,
      finalPoem: []
    }
  }

    onSubmit = (line) => {
      const extendedPoem = this.state.poem
      console.log(extendedPoem)

      extendedPoem.push(line)
      // const newPoem = 
      // console.log(newPoem)
      console.log(line)
      console.log(extendedPoem)


      this.setState({
        poem: extendedPoem,
      });

      console.log(this.state.poem);
      console.log(this.state.poem.length);
    };

    onFinishCallback = () => {
      const entirePoem = this.state.poem
      console.log(entirePoem)

      this.setState({
        finalPoem: entirePoem,
        poem: [],
        finished: true,
      });
    }

    finalPoem = () => {
      console.log(this.state.finalPoem)
      return (
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          <div>{this.state.finalPoem}</div>
        </section>
      )
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
      <div>
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        {!this.state.poem.length > 1 && <RecentSubmission />}

        {!this.state.finished &&  <PlayerSubmissionForm fields={FIELDS} onSubmitCallback={this.onSubmit} player={this.state.poem.length + 1}/>}

        <FinalPoem poem={this.state.poem} finish={this.state.finished} onFinishCallback={this.onFinishCallback} />
      
        {this.state.finished && this.finalPoem()}
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
