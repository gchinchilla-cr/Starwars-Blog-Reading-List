import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDetailed = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div
			className="jumbotron"
			style={{ backgroundColor: "#566573", width: "950px", height: "500px", margin: "auto", marginTop: "130px" }}>
			<h1 className="display-4" style={{ color: "white", marginTop: "-40px" }}>
				{store.planets[params.theid].name}
			</h1>
			<hr className="my-4" />

			<img
				src="https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=164%2C0%2C953%2C536"
				style={{ height: "200px", width: "200px", marginLeft: "90px" }}
				alt="..."
			/>

			<div style={{ float: "right", height: "200px", width: "350px", marginRight: "120px" }}>
				<p style={{ color: "white" }}>
					The capital of the New Republic, Hosnian Prime is a cosmopolitan world on the outskirts of the
					galaxy’s Core Worlds region. One of Mon Mothma’s reforms in establishing the New Republic was that
					member worlds would host the Senate on a rotating basis
				</p>
			</div>

			<hr className="my-3" />

			<div className="container" style={{ height: "2cm", padding: "0.5cm" }}>
				<div className="row">
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Name: </strong>
						<p style={{ color: "white" }}>{store.planets[params.theid].name}</p>
					</div>
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Climate: </strong>
						<p style={{ color: "white" }}>{store.planets[params.theid].climate}</p>
					</div>
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Population: </strong>
						<p style={{ color: "white" }}>{store.planets[params.theid].population}</p>
					</div>
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Orbital_Period: </strong>
						<p style={{ color: "white" }}>{store.planets[params.theid].orbital_period}</p>
					</div>
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Rotation_Period</strong>
						<p style={{ color: "white" }}>{store.planets[params.theid].rotation_period}</p>
					</div>
					<div className="col-sm-2">
						<strong style={{ color: "white" }}>Diameter: </strong>
						<p style={{ color: "white" }}>{store.planets[params.theid].diameter}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
