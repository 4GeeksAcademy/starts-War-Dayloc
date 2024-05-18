import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Personajes = () => {
  const { id } = useParams();
  const { actions, store } = useContext(Context);
  console.log(store);
  return (
    <div>
      {store.people.properties.map(() => {
        return <div>{people.uid}</div>;
      })}
      <div> </div>
    </div>
  );
};
