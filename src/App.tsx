import "../src/reset.css";
import "./App.css";
import { NavBarComponent } from "../src/components/NavBarComponent";
import { CharacterRatingComponent } from "./components/CharacterRatingComponent";
import { CharacterCardComponent } from "./components/CharacterCardsComponent";
import { data } from "../characterData";

function App() {
  let firstFiveByVotes = data;
  firstFiveByVotes = firstFiveByVotes
    .slice(0, 5)
    .sort((a, b) => b.votes - a.votes);
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
