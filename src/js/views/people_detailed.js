import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { People } from "../component/people";

export const PeopleDetailed = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div
			className="jumbotron"
			style={{ backgroundColor: "#566573", width: "950px", height: "500px", margin: "auto", marginTop: "130px" }}>
			<h1 className="display-4" style={{ color: "white", marginTop: "-40px" }}>
				{store.people[params.theid].name}
			</h1>

			<hr className="my-4" />

			<img
				src={store.peopleImg[store.people[params.theid].name]}
				//src="https://lumiere-a.akamaihd.net/v1/images/eu_sws-9-the-rise-of-skywalker_ft_m_e116ee0e.jpeg?region=0,0,750,883"
				style={{ height: "200px", width: "350px", marginLeft: "40px" }}
				alt="..."
			/>

			<div style={{ float: "right", height: "200px", width: "350px", marginRight: "90px" }}>
				<p style={{ color: "white" }}>
					Star Wars (conocida también en español como La guerra de las galaxias) es una franquicia compuesta
					primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en
					la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012.
				</p>
			</div>

			<hr className="my-3" />

			<div className="container" style={{ height: "2cm", padding: "0.5cm" }}>
				<div className="row">
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Namer: </strong>
						<p style={{ color: "white" }}>{store.people[params.theid].name}</p>
					</div>
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Birth Year: </strong>
						<p style={{ color: "white" }}>{store.people[params.theid].birth_year}</p>
					</div>
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Gender: </strong>
						<p style={{ color: "white" }}>{store.people[params.theid].gender}</p>
					</div>
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Height: </strong>
						<p style={{ color: "white" }}>{store.people[params.theid].height}</p>
					</div>
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Skin Color: </strong>
						<p style={{ color: "white" }}>{store.people[params.theid].skin_color}</p>
					</div>
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Eye Color:</strong>
						<p style={{ color: "white" }}>{store.people[params.theid].eye_color}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

/*Single.propTypes = {
	match: PropTypes.object
};*/
