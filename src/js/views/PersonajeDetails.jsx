import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const PersonajeDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [currentCharacter, setCurrentCharacter] = useState({});
  const { id } = params

  const getCharacterDetails = async (id) => {
    const Character = store.personajesSwapi.find((personaje) => personaje.uid === id);
    setCurrentCharacter(Character);
  };

  useEffect(() => {
    if (store.personajesSwapi.length === 0) return
    getCharacterDetails(id);
  }, [store.personajesSwapi]);

  return (
    <>
      {currentCharacter ? (
        <div className="card mb-3 m-3 border border-0" style={{ MaxWidth: "100px" }}>
          <div className="row g-0">
            <div className="col-md-4 p-4">
              <img src={`https://starwars-visualguide.com/assets/img/characters/${currentCharacter?.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fs-1">
                  {currentCharacter?.properties?.name}</h5>
                <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla, massa sed faucibus elementum, arcu quam facilisis urna, quis viverra sapien est eget odio. Proin dictum nibh vitae mi dignissim consectetur vitae ac lorem. Proin id vulputate odio, hendrerit dictum nulla. Cras dapibus nulla sed orci varius finibus. Vivamus quis elit ac justo sagittis cursus. Aliquam et consectetur tellus. Ut vehicula bibendum tellus, id lacinia neque imperdiet sit amet. Vivamus ornare nibh urna, ut varius mauris porta non.

                  Nulla massa tellus, ultrices nec facilisis eu, sodales at elit. Aenean in tempor mi, in suscipit sem. Fusce et erat libero. Morbi ac ante porttitor, condimentum enim quis, lobortis lacus. Praesent auctor euismod mauris. Nam facilisis pharetra fermentum. Donec mi velit, tempor et risus non, facilisis tempor lectus. Morbi non laoreet lectus.

                  Suspendisse vestibulum nec elit eu rhoncus. Aenean volutpat, tortor in tincidunt aliquam, enim leo tincidunt erat, vel laoreet nisl diam non tortor. Aenean id nunc urna. In semper, lacus quis porta dignissim, elit turpis posuere mauris, sed semper felis metus pulvinar mauris. Aliquam non dui libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed consequat luctus nisi, et ornare mi varius quis. Pellentesque lorem.</p>
              </div>
            </div>
          </div>
          <div className="dangerLine h4 pb-2 mb-4 text-danger border-bottom border-white text d-flex gap-5 mt-4">
          </div>
          <div className="text d-flex gap-5 fs-4 text-danger border-top border-danger m-3 justify-content-center">
            <p>Name: {currentCharacter?.properties?.name}</p>
            <p>Birth Year: {currentCharacter?.properties?.birth_year}</p>
            <p>Gender: {currentCharacter?.properties?.gender}</p>
            <p>Height: {currentCharacter?.properties?.height}</p>
            <p>Skin Color: {currentCharacter?.properties?.skin_color}</p>
            <p>Eye Color: {currentCharacter?.properties?.eye_color}</p>
          </div>
        </div>
      ) : (
        <>cargando</>
      )}
    </>
  );
};
export default PersonajeDetails;
