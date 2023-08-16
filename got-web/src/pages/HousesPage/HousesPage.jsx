import "./HousesPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import Search from "../../components/Search/Search";
import Nav from "../../components/Nav/Nav";
import HomeButton from "../../components/HomeButton/HomeButton";
import LangNav from "../../components/LangNav/LangNav";
import Gallery2 from "../../components/GalleryHouses/GalleryHouses";
import GalleryHouses from "../../components/GalleryHouses/GalleryHouses";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  let [search, setSearch] = useState("");

  let apiUrl = "http://localhost:3000/houses";

  // apiUrl = search.length !== 0 ? apiUrl + "name=" + search + "&" : apiUrl;

  useEffect(() => {
    let apiQuery = search ? `?name_like=${search}` : "";
    axios
      .get(apiUrl + apiQuery)
      .then((response) => {
        setHouses(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los personajes:", error);
      });
  }, [search]);

  return (
    <div className="houses-page">
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
              <GalleryHouses path={"/houses"} data={houses} />
            </div>
          </SimpleBar>
        </div>
        <Nav />
      </div>
  );
};

export default Houses;
