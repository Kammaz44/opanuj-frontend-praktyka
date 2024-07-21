import { Character } from '../types/Character';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </>
  );
};
