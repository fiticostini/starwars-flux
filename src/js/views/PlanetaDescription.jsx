import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlanetaDescription = () => {
  const [currentPlanet, setCurrentPlanet] = useState({});
  const { id } = useParams();
  const fetchPlanetDetail = async(id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
      if (response.ok) {
        const data = await response.json();
        setCurrentPlanet(data.result);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPlanetDetail(id);
}, []);
return (
  <>
    {currentPlanet ? (
      <div className="card mb-3 m-3 border border-0" style={{ MaxWidth: "100px" }}>
        <div className="row g-0">
          <div className="col-md-4 p-4">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${currentPlanet?.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-1">
                {currentPlanet?.properties?.name}</h5>
              <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla, massa sed faucibus elementum, arcu quam facilisis urna, quis viverra sapien est eget odio. Proin dictum nibh vitae mi dignissim consectetur vitae ac lorem. Proin id vulputate odio, hendrerit dictum nulla. Cras dapibus nulla sed orci varius finibus. Vivamus quis elit ac justo sagittis cursus. Aliquam et consectetur tellus. Ut vehicula bibendum tellus, id lacinia neque imperdiet sit amet. Vivamus ornare nibh urna, ut varius mauris porta non.

                Nulla massa tellus, ultrices nec facilisis eu, sodales at elit. Aenean in tempor mi, in suscipit sem. Fusce et erat libero. Morbi ac ante porttitor, condimentum enim quis, lobortis lacus. Praesent auctor euismod mauris. Nam facilisis pharetra fermentum. Donec mi velit, tempor et risus non, facilisis tempor lectus. Morbi non laoreet lectus.

                Suspendisse vestibulum nec elit eu rhoncus. Aenean volutpat, tortor in tincidunt aliquam, enim leo tincidunt erat, vel laoreet nisl diam non tortor. Aenean id nunc urna. In semper, lacus quis porta dignissim, elit turpis posuere mauris, sed semper felis metus pulvinar mauris. Aliquam non dui libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed consequat luctus nisi, et ornare mi varius quis. Pellentesque lorem.</p>
            </div>
          </div>
        </div>
        <div className="dangerLine h4 pb-2 mb-4 text-danger border-bottom border-white text d-flex gap-5 mt-4">
        </div>
        <div className="text d-flex gap-5 fs-4 text-danger border-top border-danger m-3 justify-content-center">
          <p>Name: {currentPlanet?.properties?.name}</p>
          <p>Climate: {currentPlanet?.properties?.climate}</p>
          <p>Population: {currentPlanet?.properties?.population}</p>
          <p>Orbital Period: {currentPlanet?.properties?.orbital_period}</p>
          <p>Rotation Period {currentPlanet?.properties?.rotation_period}</p>
          <p>Diameter: {currentPlanet?.properties?.diameter}</p>
        </div>
      </div>
    ) : (
      <>cargando</>
    )}
  </>
);
};  

export default PlanetaDescription;