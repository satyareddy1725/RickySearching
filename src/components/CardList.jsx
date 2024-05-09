import Card from "./Card";

const CardList = ({ characters }) => {
  // const createCards = ()=> {
  //   return characters.map((character, id)=> {
  //     return <Card key ={id} character = {character} />
  //   })
  // }
  // if (characters){
  //   console.log(characters.length)
  // }
  
  return (
    <ul className="flex flex-wrap gap-4 justify-center mt-4">
      {characters &&
        characters.map((character, id) => {
          return <Card key={id} character={character} />;
        })}
    </ul>
  );
};

export default CardList;
