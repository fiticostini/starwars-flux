import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  console.log(store.personajesSwapi);
  console.log(store.planetasSwapi);


  return (
    <div className="text-start mt-5 container">
      <h2 className="text-danger">Characters</h2>
      
      <div className="carrousel">
        {store.personajesSwapi.map((personaje) => {
          return (
            <div className="card" key={personaje.uid}>
              <img src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{personaje.properties.name}</h5>
                <p className="card-text">Gender: {personaje.properties.gender}</p>
                <p className="card-text">Hair Color: {personaje.properties.hair_color}</p>
                <p className="card-text">Eye Color: {personaje.properties.eye_color}</p>
                <div className="d-flex justify-content-between aling-item-start">
                  <button className="btn btn-outline-primary"
                    onClick={() => navigate(`/personaje/${personaje.uid}`)}>Learn more</button>
                  <button className="btn btn-outline-warning" 
                    onClick={() => actions.addFavorite(personaje)}><i className="fab fa-gratipay"></i></button>  
                </div>
              </div>
            </div>

          );
        })}
      </div>
      <h2 className="mt-5 text-danger">Planets</h2>
      <div className="carrousel">
        {store.planetasSwapi.map((planeta) => {
          return (
            <div className="card" key={planeta.uid}>
              <img src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{planeta.properties.name}</h5>
                <p className="card-text">Population: {planeta.properties.population}</p>
                <p className="card-text">Terrain: {planeta.properties.terrain}</p>
                <div className="footercard">
                <button className="btn btn-outline-primary"
                  onClick={() => navigate(`/planeta/${planeta.uid}`)}>Learn more</button>
                <button className="btn btn-outline-warning" 
                  onClick={() => actions.addFavorite(planeta)}><i className="fab fa-gratipay"></i></button> 
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
};
