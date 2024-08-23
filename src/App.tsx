import "../src/reset.css";
import "./App.css";
import { NavBarComponent } from "../src/components/NavBarComponent";
import { CharacterRatingComponent } from "./components/CharacterRatingComponent";
import { CharacterCardComponent } from "./components/CharacterCardsComponent";
import { data } from "../characterData";

function App() {
  let firstFiveByVotes = [...data];
  firstFiveByVotes = firstFiveByVotes
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  /**About the Character Card Component. I don't actually know what you wanted me to do with that one.
   *
   * you said in the video that the characters in the card component shouldn't be in perfect alphabetical order. but they are displayed in
   * the order that the array is originally set up in CharacterData.ts file without any alteration. they are also in the same order as the "Original Example showed"
   *
   * also! in the ReadMe File of the original project it states in the final step of the check list that the character cards should not be sorted. Am I missing something?
   * this got me confused.
   *
   * I fixed the other things but please let me know what else need to be changed. Thanks for grading my project!
   */

  return (
    <>
      <NavBarComponent />
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table className="content-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
            {firstFiveByVotes.map((item, index) => (
              <CharacterRatingComponent
                character={item}
                key={index}
                id={index}
              />
            ))}
          </tbody>
        </table>
      </section>
      <section id="character-cards">
        {data.map((item) => (
          <CharacterCardComponent character={item} key={item.name} />
        ))}
      </section>
    </>
  );
}

export default App;
