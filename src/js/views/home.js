import React, { useContext } from "react";
import "../../styles/home.scss";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="cuerpo" className="container-fluid" style={{ width: "1050px" }}>
			<div className="container ">
				<h1 style={{ marginTop: "100px", color: "#a9e2f4" }}>Characters</h1>
				<div id="zona_people" className="scrolling-wrapper row flex-row flex-nowrap">
					<div>
						<People />
					</div>
				</div>
				<h1 style={{ marginTop: "120px", color: "#a9e2f4" }}>Planets </h1>
				<div id="zona_planets" className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
					<div>
						<Planets />
					</div>
				</div>
			</div>
		</div>
	);
};
