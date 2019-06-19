import React from 'react';
import './FinalPoem.css';
import RecentSubmission from './RecentSubmission';

const FinalPoem = (props) => {
  console.log(props.allLines)
  const poemComponents = props.allLines.map((line, i) => {
    return (
      <div key={i}>
        <p>{`The ${line.adj1} ${line.noun1} ${line.adv} ${line.verb} the ${line.adj2} ${line.noun2}`}</p>
      </div>
    )
  })

  // const poemComponents = props.allLines.map((line, i) => {
  //   return (
  //     <div key={i}>
  //       <RecentSubmission
  //         index={i}
  //         adj1={line.adj1}
  //         noun1={line.noun1}
  //         adv={line.adv}
  //         verb={line.verb}
  //         adj2={line.adj2}
  //         noun2={line.noun2} />
  //     </div>
  //   );
  //   })

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {poemComponents}
       

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
