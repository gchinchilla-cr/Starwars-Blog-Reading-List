import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

export function People() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<div className="row p-2 w-6">
				<div className="cards-container d-flex justify-content-between">
					{store.people.map((element, index) => {
						return (
							<div
								key={index}
								className="card"
								style={{
									width: "19rem",
									height: "30rem",
									margin: "1rem",
									padding: "1rem",
									backgroundColor: "#2a2a2a",
									borderColor: "#1E90FF"
								}}>
								<img src={store.peopleImg[element.name]} />

								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<ul className="characters">
										<li>Gender: {element.gender}</li>
										<li>Eye color: {element.eye_color}</li>
										<li>Hair color: {element.hair_color}</li>
									</ul>
									<Link to={"/people_detailed/" + index} className="btn btn-outline-primary">
										Learn More!
									</Link>
									<button
										onClick={() => actions.addFavorites(element.name, "persona")}
										type="button"
										className="btn btn-outline-warning float-right">
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
