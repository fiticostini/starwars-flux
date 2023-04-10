import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/pngwing.com.png.png"

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="starWarlogo mx-5" src={starWarsLogo} />
			</Link>
			<div className="mx-5">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu">
						
              <div>{store.favorites.map((favorito, index) => {
							return (<li key={`${favorito._id}-${index}`} className="d-flex justify-content-between">
								<p >{favorito.properties.name}</p>
                <button className="btn btn-outline-dark border border-0" 
                onClick={() => actions.addFavorite(favorito)}><i className="fas fa-trash"></i></button>
						
                </li>)
						})}
            </div>
						

					</ul>
				</div>
			</div>
		</nav>
	);
};
