import "./GalleryHouses.css"
import React from "react";
import 'simplebar-react/dist/simplebar.min.css';
import { Link } from "react-router-dom";

export default function GalleryHouses({ path, data }) {
  let display;

  if (data) {
    display = data?.map((x) => {
      let { id, name, image } = x;

      return (
        <div className="card-box-house" key={id}>
          <Link key={id} to={`${path}/${name}`} className="container-link">
            <img className="card-house" src={`http://localhost:3000${image}`} alt={name} />
          </Link>
            <h1 className="card-title-house">{name}</h1>
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
}