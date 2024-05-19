import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/vehicle.css";

const Vehicle = () => {
  const { id } = useParams();
  const { actions, store } = useContext(Context);
  const vehicle = store.vehicle
    ? store.vehicle.find((vehicle) => vehicle.uid === id)
    : null;
  if (!vehicle) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container text-center">
      <h1>{vehicle.properties.name}</h1>

      <p>
        <h2>Length:</h2> {vehicle.properties.length}
      </p>
      <p>
        <h2>Manufacturer:</h2> {vehicle.properties.manufacturer}
      </p>
      <p>
        <h2>Model:</h2> {vehicle.properties.model}
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Vehicle;
