import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
//import { Nav, Image, DropdownButton, Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<nav id="nav_princ" className="navbar fixed-top navbar-expand-lg navbar-light" style={{ width: "1550px" }}>
			<Link className="navbar-brand" to="/">
				<img id="logo" src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png" />
			</Link>

			<Dropdown id="favorites" isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle caret color="primary">
					Favoritos {store.favorites.length}
				</DropdownToggle>
				<DropdownMenu>
					{store.favorites.map((element, i) => {
						return (
							<li key={i}>
								<DropdownItem>
									{element.name}
									<button className="remove" onClick={() => actions.deleteFavorites(i)}>
										<i className="far fa-trash-alt" />
									</button>
								</DropdownItem>
							</li>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		</nav>
	);
};
