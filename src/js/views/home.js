import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { actions, store } = useContext(Context);

  if (!store.people) return null;
  if (!store.vehicle) return null;
  if (!store.planet) return null;
  console.log(store);
  return (
    <div className="container container text-center">
      <h1 className="personajes mt-4">Personajes</h1>

      <div className="container  mt-5">
        {store.people.map((people) => (
          <div className="row " key={people.id} id="list">
            <div className="col-2" id="num">
              {people.uid}
            </div>

            <div className="col-10 ">
              {" "}
              <Link to={`/people/${people.uid}`}>{people.properties.name}</Link>
            </div>
          </div>
        ))}
      </div>

      <h1 className=" planetas mt-4">Planetas</h1>

      <div className="container text-center mt-5">
        {store.planet.map((planet) => (
          <div className="row " key={planet.id} id="list">
            <div className="col-2" id="num">
              {planet.uid}
            </div>
            <div className="col-10 ">
              <Link to={`/planet/${planet.uid}`}>{planet.properties.name}</Link>
            </div>
          </div>
        ))}
      </div>
      <h1 className=" vehiculos mt-4">Vehículos</h1>
      <dvi className="col-4">
        <div className="container  mt-5">
          {store.vehicle.map((vehicle) => (
            <div className="row " key={vehicle.id} id="list">
              <div className="col-2" id="num">
                {vehicle.uid}
              </div>

              <div className="col-10 ">
                {" "}
                <Link to={`/vehicle/${vehicle.uid}`}>
                  {vehicle.properties.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </dvi>
    </div>
  );
};
