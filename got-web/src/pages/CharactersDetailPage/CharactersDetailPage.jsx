import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./CharacterDetailPage.css";
import axios from "axios";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import LangNav from "../../components/LangNav/LangNav";
import ReturnButton from "../../components/ReturnButton/ReturnButton";

export default function CharactersDetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [house, setHouse] = useState(null);

  useEffect(() => {
    async function getCharacterDetails() {
      try {
        const { data } = await axios(
          `http://localhost:3000/characters/?name=${id}`
        );
        setCharacter(data[0]);
      } catch (e) {
        console.error(e);
      }
    }
    getCharacterDetails();
  }, [id]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/houses")
      .then((response) => {
        if (character) {
          if (character.house === "Stark") {
            setHouse(response.data[0]);
          } else if (character.house === "Lannister") {
            setHouse(response.data[1]);
          } else if (character.house === "Baratheon") {
            setHouse(response.data[2]);
          } else if (character.house === "Targaryen") {
            setHouse(response.data[3]);
          } else if (character.house === "Tyrell") {
            setHouse(response.data[4]);
          } else if (character.house === "Greyjoy") {
            setHouse(response.data[5]);
          } else if (character.house === "Martell") {
            setHouse(response.data[6]);
          } else if (character.house === "Tully") {
            setHouse(response.data[7]);
          } else if (character.house === "Arryn") {
            setHouse(response.data[8]);
          } else if (character.house === "Bolton") {
            setHouse(response.data[9]);
          } else if (character.house === "Frey") {
            setHouse(response.data[10]);
          } else if (character.house === "Mormont") {
            setHouse(response.data[11]);
          } else if (character.house === "Tarly") {
            setHouse(response.data[12]);
          } else if (character.house === "Seaworth") {
            setHouse(response.data[13]);
          } else if (character.house === "Tarth") {
            setHouse(response.data[14]);
          } else {
            setHouse(null);
          }
        }
      })
      .catch((error) => {
        console.error("Error al obtener los personajes:", error);
      });
  }, [character]);

  return (
    <div className="character-deatil">
      {character ? (
        <>
          <div className="header-gallery">
            <ReturnButton to="/characters" />
            <div className="header-gallery-buttons">
              <div>
                <NavLink to="/">
                  <img
                    className="home-button"
                    src="../img/home-icon.png"
                    alt="home"
                  ></img>
                </NavLink>
              </div>
              <LangNav />
            </div>
          </div>
          <div className="character-detail-head">
            <img
              className="head-img"
              src={`http://localhost:3000${character.image}`}
              alt={character.name}
            />
            <h2 className="head-name">{character.name}</h2>
          </div>
          <div className="character-detail-data">
            {house && (
              <ul>
                <h3>House</h3>
                <img
                  className="data-img"
                  src={`http://localhost:3000/${house.image}`}
                  alt={house.name}
                />
              </ul>
            )}
            <ul>
              <h3>Parents</h3>
              {character.parents.map((parent, index) => (
                <li key={index}>{parent}</li>
              ))}
            </ul>
            <ul>
              <h3>Siblings</h3>
              {character.siblings.map((sibling, index) => (
                <li key={index}>{sibling}</li>
              ))}
            </ul>
            <ul>
              <h3>Titles</h3>
              <SimpleBar style={{ maxHeight: 110, width: "200px" }}>
                {character.titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </SimpleBar>
            </ul>
            <ul>
              <h3>Alliances</h3>
              {character.alliances.map((alliance, index) => (
                <li key={index}>{alliance}</li>
              ))}
            </ul>
            <ul>
              <h3>Episodes</h3>
              <SimpleBar style={{ maxHeight: 110, width: "200px" }}>
                {character.episodes.map((episode, index) => (
                  <li key={index}>{episode}</li>
                ))}
              </SimpleBar>
            </ul>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
