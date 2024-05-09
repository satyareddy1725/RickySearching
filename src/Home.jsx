import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Button from "./components/Button";
import CardList from "./components/CardList";

const Home = () => {
  const [characters, setCharatcters] = useState();
  const [filteredData, setfilteredData] = useState();
  const [searchQuery, setSearchQuery] = useState();

  const getCharacters = async () => {
    try {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const response = await data.json();
      setCharatcters(response.results);
      setfilteredData(response.results);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleInputChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    getCharacters();
    // console.log(characters) //want to see characters before calling the api call then console the characters.
  }, []);

  useEffect(() => {
    if (characters) {
      const filtered = characters.filter(
        (character) =>
          character.name &&
          character.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log(filtered.length);
      setfilteredData(filtered);
    }
  }, [searchQuery]);

  return (
    <section>
      <Header />
      <Input
        type="search"
        placeholder="type your character..."
        changeHandler={HandleInputChange}
      />
      <CardList characters={filteredData} />
      <Button clickHandler={() => {}}>Next</Button>
      <Footer />
    </section>
  );
};

export default Home;
