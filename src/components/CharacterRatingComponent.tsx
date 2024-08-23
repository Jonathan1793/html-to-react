import { Component } from "react";
import "../components_css/CharacterRatingComponent.css";
import { Character } from "../../characterData";

type CharacterType = {
  character: Character;
  id: number;
};

export class CharacterRatingComponent extends Component<CharacterType> {
  render() {
    const { name, skillset, votes, nickName } = this.props.character;
    const { id } = this.props;

    return (
      <>
        <tr className={id % 2 === 0 ? "dark" : "light"}>
          <td className="table-cell-1">
            {name} {nickName !== null ? `"${nickName}"` : ""}
          </td>
          <td className="table-cell-2">{skillset.join(", ")}</td>
          <td className="table-cell-3">{votes}</td>
        </tr>
      </>
    );
  }
}
