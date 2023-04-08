import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

export const Footer = () => {
	const { actions } = useContext(Context);
	  return (
	<footer className="footer mt-auto py-3 text-center">
		<p>Esta es la pagina de 4Geeks Academy</p>
		
	</footer>
	);
};
