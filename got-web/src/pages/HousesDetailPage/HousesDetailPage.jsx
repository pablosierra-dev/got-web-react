import "./HousesDetailPage.css";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import HomeButton from "../../components/HomeButton/HomeButton";
import LangNav from "../../components/LangNav/LangNav";

export default function HousesDetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function getCharacterDetails() {
      try {
        const { data } = await axios(
          `http://localhost:3000/houses/?name=${id}`
        );
        setCharacter(data[0]);
        console.log(data[0]);
      } catch (e) {
        console.error(e);
      }
    }
    getCharacterDetails();
  }, [id]);

  return (
    <div className="house-detail">
    <div className="header-gallery">
            <ReturnButton to="/houses" />
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
      {character ? (
        <>
          <div className="house-detail-head">
            <img
              className="head-img"
              src={`http://localhost:3000${character.image}`}
              alt={character.name}
            />
            <h3>HOUSE {character.name}</h3>
          </div>
          <div className="house-detail-data">
            <ul className="Settlement">
              <h3>Settlement:</h3>
              <li>{character.settlement}</li>
            </ul>
            <ul className="Region">
              <h3>Region:</h3>
              <li>{character.region}</li>
            </ul>
            <ul>
              <h3>Alliances</h3>
              {character.alliances.map((alliance, index) => (
                <li key={index}>{alliance}</li>
              ))}
            </ul>
            <ul>
              <h3>Religions</h3>
              {character.religions.map((religion, index) => (
                <li key={index}>{religion}</li>
              ))}
            </ul>
            <ul className="Foundation">
              <h3>Region:</h3>
              <li>{character.foundation}</li>
            </ul>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
