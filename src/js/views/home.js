import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { actions, store } = useContext(Context);

  if (!store.people) return null;
  if (!store.vehicle) return null;
  if (!store.planet) return null;
  // const select=[]
  // const favoritos=()=>{
  //   if()
  // }
  return (
    <div className="container container text-center">
      <div className="container">
        <h1 className="personajes mt-4">Personajes</h1>
        <div className="carousel ">
          {store.people.map((people) => (
            <div
              className="card bg-dark"
              style={{ width: "18rem" }}
              key={people.id}
            >
              <img
                src="https://images5.fanpop.com/image/photos/25600000/Star-Wars-Saga-Wallpapers-star-wars-25671326-1024-768.jpg"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{people.properties.name}</h5>
                <img
                  onClick={() => {
                    console.log("agregar a favoritos");
                  }}
                  src="https://i.pinimg.com/736x/f9/6a/17/f96a17cb970c98e22f4073f5c2e59f99.jpg"
                  className="like"
                ></img>
                <Link to={`/people/${people.uid}`}>Detalle</Link>
              </div>
            </div>
          ))}
          <div class="carousel"></div>
        </div>

        <div className="container  mt-5"></div>

        <h1 className=" planetas mt-4">Planetas</h1>

        <div className="carousel">
          {store.planet.map((planet) => (
            <div
              className="card bg-dark"
              style={{ width: "18rem" }}
              key={planet.id}
            >
              <img
                src="https://th.bing.com/th/id/OIP.TVmzDYH_6Y8m5NSN0MSEnQHaGd?w=206&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{planet.properties.name}</h5>
                <img
                  onClick={() => {
                    console.log("agregar a favoritos");
                  }}
                  src="https://i.pinimg.com/736x/f9/6a/17/f96a17cb970c98e22f4073f5c2e59f99.jpg"
                  className="like"
                ></img>
                <Link to={`/planet/${planet.uid}`}>Detalle</Link>
              </div>
            </div>
          ))}
          <div class="carousel"></div>
        </div>
        <h1 className=" vehiculos mt-4">Vehículos</h1>
        <div className="carousel">
          {store.vehicle.map((vehicle) => (
            <div
              className="card bg-dark "
              style={{ width: "600px" }}
              key={vehicle.id}
            >
              <img
                onClick={() => {
                  console.log("agregar a favoritos");
                }}
                src="https://th.bing.com/th/id/R.8ce8007d8b3d09ea1a4194a1f1df00c4?rik=nzGApumRMoQU9Q&pid=ImgRaw&r=0"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{vehicle.properties.name}</h5>
                <img
                  src="https://i.pinimg.com/736x/f9/6a/17/f96a17cb970c98e22f4073f5c2e59f99.jpg"
                  className="like"
                ></img>
                <Link to={`/vehicle/${vehicle.uid}`}>Detalle</Link>
              </div>
            </div>
          ))}
          <div class="carousel"></div>
        </div>
      </div>
    </div>
  );
};
