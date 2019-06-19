import React from 'react';
import './FinalPoem.css';

// const FinalPoem = (props) => {
class FinalPoem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAllPoems: false,
      allPoems: this.props.allSubmissionsString
    }
  }
  
  showAllPoems = () => {
    console.log(this.state.showAllPoems)

    this.setState({
      showAllPoems: true
    })
    console.log('all of the submissions: ', this.props.allSubmissionsString)
  }

  render() {
    const displayButton = 
      <div className="FinalPoem__reveal-btn-container">
        <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn"
        onClick={this.showAllPoems} />
      </div>


    const formatPoem = this.props.allSubmissionsString.map((line, i) => {
      return (
      <p key={i}>
        {line}
      </p>
      )
    })

    const { showAllPoems } = this.state;

   
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>

      <div> {showAllPoems ? formatPoem : displayButton} </div>
      
    </div>
  );
  }
}

export default FinalPoem;
