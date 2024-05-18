import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { actions, store } = useContext(Context);

  if (!store.people) return null;
  return (
    <div className="container text-center mt-5">
      {store.people.map((people) => (
        <div className="row " key={people.id} id="list">
          <Link to="/personajes/:id">
            <div className="col-2" id="num">
              {people.uid}
            </div>

            <div className="col-10 "> {people.properties.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
