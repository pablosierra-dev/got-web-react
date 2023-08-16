// Character.js
import "./CharactersPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import Gallery from "../../components/Gallery/Gallery";
import Search from "../../components/Search/Search";
import Nav from "../../components/Nav/Nav";
import LangNav from "../../components/LangNav/LangNav";
import HomeButton from "../../components/HomeButton/HomeButton";

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  let apiUrl = "http://localhost:3000/characters";

  useEffect(() => {
    let apiQuery = search ? `?name_like=${search}` : "";
    axios
      .get(apiUrl + apiQuery)
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los personajes:", error);
      });
  }, [search]);

  return (
    <div className="character-page">
      <div className="header-gallery">
        <Search setSearch={setSearch} search={search} />
        <div className="header-gallery-buttons">
          <HomeButton />
          <LangNav />
        </div>
      </div>
      <div className="container">
      <SimpleBar style={{ maxHeight: 650, width: '100%' }}>
          <div className="container-card">
            <Gallery path={"/characters"} data={characters} />
          </div>
        </SimpleBar>
      </div>
      <Nav />
    </div>
  );
};

export default Character;
