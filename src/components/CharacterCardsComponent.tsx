import { Character } from "../../characterData";
import "../components_css/CharacterCardsComponent.css";

type MyCharacterType = {
  character: Character;
};

export function CharacterCardComponent({
  character: { name, nickName, imageUrl, background },
}: MyCharacterType) {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickName}</h4>
      </div>
      <img src={imageUrl} alt="" />
      <p>{background}</p>
    </div>
  );
}
