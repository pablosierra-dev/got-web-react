import "./Gallery.css"
import React from "react";
import 'simplebar-react/dist/simplebar.min.css';
import { Link } from "react-router-dom";

export default function Gallery({ path, data }) {
  let display;

  if (data) {
    display = data?.map((x) => {
      let { id, name, image } = x;

      return (
        <div className="card-box" key={id}>
          <Link key={id} to={`${path}/${name}`} className="container-link">
            <img className="img-fluid card" src={`http://localhost:3000${image}`} alt={name} />
          </Link>
            <h1 className="card-title">{name}</h1>
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
}