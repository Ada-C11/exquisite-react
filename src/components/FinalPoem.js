import React from "react";
import "./FinalPoem.css";

const FinalPoem = props => {

  const onSelectClicked = () => {
    props.onPoemCompleteCallback();
  };

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.wholePoem}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input
          type="button"
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
          onClick={onSelectClicked}
        />
      </div>
    </div>
  );
};

// const PetDetails = props => {
//   const { name, location, about, species, images } = props.currentPet;
//   return (
//     <section className="pet-details">
//       <section className="pet-details--header">
//         <h2 className="petdetails--name">
//           {speciesEmoji(species)} {name} {speciesEmoji(species)}
//         </h2>
//         <img src={images[0]} alt={`${name}`} className="pet-details--image" />
//       </section>
//       <article>
//         <h3>About {name}</h3>
//         <p>{about}</p>
//       </article>
//       <footer className="text-muted pet-location">{location}</footer>
//     </section>
//   );
// };

export default FinalPoem;
