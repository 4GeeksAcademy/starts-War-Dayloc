import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../../styles/personaje.css";

export const Personajes = () => {
  const { id } = useParams();
  const { actions, store } = useContext(Context);
  const person = store.people
    ? store.people.find((people) => people.uid === id)
    : null;
  if (!person) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container text-center">
      <h1 className="name">{person.properties.name}</h1>

      <p>
        <h1>Gender:</h1> {person.properties.gender}
      </p>
      <p>
        <h1>Height:</h1> {person.properties.height}
      </p>
      <p>
        <h1>Mass:</h1> {person.properties.mass}
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
