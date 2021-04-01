const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
			peopleImg: {
				"Luke Skywalker":
					"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=960",
				"C-3PO": "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536",
				"R2-D2":
					"https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_86916bb6.jpeg?region=304%2C0%2C1778%2C1000&width=960",
				"Darth Vader":
					"https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=960",
				"Leia Organa": "https://starwarsblog.starwars.com/wp-content/uploads/2018/07/leia-organa-1-tall.jpg",
				"Owen Lars":
					"https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=960",
				"Beru Whitesun lars":
					"https://i2.wp.com/thefutureoftheforce.com/wp-content/uploads/2018/01/aunt-beru-header.jpg?resize=672%2C372&ssl=1",
				"R5-D4":
					"https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960",
				"Biggs Darklighter":
					"https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=960",
				"Obi-Wan Kenobi": "https://starwarsblog.starwars.com/wp-content/uploads/2015/10/JediTemple05.jpg"
			},
			planetImg: {
				Tatooine:
					"https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=164%2C0%2C953%2C536",
				Alderaan:
					"https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=960",
				"Yavin IV":
					"https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=960",
				Hoth: "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675&width=960",
				Dagobah:
					"https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711&width=960",
				Bespin:
					"https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878&width=960",
				Endor:
					"https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878&width=960",
				Naboo:
					"https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878&width=960",
				Coruscant:
					"https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C0%2C1536%2C864&width=960",
				Kamino:
					"https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C0%2C1560%2C878&width=960"
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(async data => {
						console.log("load people", data.results);
						let arrayResults = data.results;
						let peopleArray = [];

						for (let i = 0; i < arrayResults.length; i++) {
							const res = await fetch(arrayResults[i].url);
							const json = await res.json();
							const data = await json.result.properties;
							peopleArray.push(data);
						}

						console.log("people array ", peopleArray);
						setStore({ people: peopleArray });
					});
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(async data => {
						console.log("load planets", data.results);
						let resultsArray = data.results;
						let planetsArray = [];

						for (let i = 0; i < resultsArray.length; i++) {
							const res = await fetch(resultsArray[i].url);
							const json = await res.json();
							const data = await json.result.properties;
							planetsArray.push(data);
						}

						console.log("planets array ", planetsArray);
						setStore({ planets: planetsArray });
					});
			},

			addFavorites: (nombre, tipo) => {
				let favoritos = getStore().favorites;
				let nameArray = favoritos.map(obj => obj.name);
				nameArray.includes(nombre)
					? setStore({ favorites: favoritos })
					: setStore({ favorites: favoritos.concat({ name: nombre, type: tipo }) });
			},

			deleteFavorites: index => {
				const favorites = getStore().favorites;
				favorites.splice(index, 1);
				setStore({ favorites: [...favorites] });
			},

			changeColor: (index, color) => {
				//get the store

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
