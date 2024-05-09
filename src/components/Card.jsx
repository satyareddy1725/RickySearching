import { Circle } from "react-feather";

const getCharacters = (status) => {
  switch (status) {
    case "Alive":
      return <Circle size={15} color="green" fill="green" className="inline" />;
    case "Dead":
      return <Circle size={15} color="red" fill="red" className="inline" />;
    default:
      return <Circle size={15} color="gray" fill="gray" className="inline" />;
  }
};

const Card = ({ character }) => {
  return (
    <li className="border-2 border-black p-2 w-64 rounded-lg">
      <h1>
        <span>{getCharacters(character.status)}</span> {character.name}
      </h1>
      {/* <span>{character.name}</span> */}
      {/* <h1>{character.name}</h1> */}
      <img src={character.image} alt={character.name} className="my-3"></img>
      <span className="bg-teal-200 p-1 text-sm rounded-md">
        {character.species}
      </span>
    </li>
  );
};

export default Card;
