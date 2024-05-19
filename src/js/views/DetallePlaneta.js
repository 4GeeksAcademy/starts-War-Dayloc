import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/detalledeplaneta.css";

const DetallePlaneta = () => {
  const { id } = useParams();
  const { actions, store } = useContext(Context);
  const planet = store.planet
    ? store.planet.find((planet) => planet.uid === id)
    : null;
  if (!planet) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container text-center">
      <h1>{planet.properties.name}</h1>

      <p>
        <h2 >Climate:</h2>Climate: {planet.properties.climate}
      </p>
      <p>
        <h2>Population: </h2>
        {planet.properties.population}
      </p>
      <p>
        <h2>Diameter: </h2> {planet.properties.diameter}
      </p>
      <p>
        <h2>Terrain:</h2>
        {planet.properties.terrain}
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default DetallePlaneta;
