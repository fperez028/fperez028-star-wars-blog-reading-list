import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { initializeData } from "../store.js";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card.jsx";
import { HorizontalScroll } from "../components/HorizontalScroll.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	useEffect(() => {
		if (
			store.people.length === 0 &&
			store.planets.length === 0 &&
			store.starships.length === 0
		) {
			initializeData(dispatch);
		}
	}, []);

	return (
		<div className="container-fluid px-4">
			<h1 className="mt-4 mb-5 text-center">Star Wars Blog</h1>

			{store.isLoading ? (
				<p className="text-center">Loading data...</p>
			) : store.error ? (
				<p className="text-danger text-center">{store.error}</p>
			) : (
				<>
					<HorizontalScroll title="Characters">
					  {store.people.map((char) => (
					    <Card
					      key={char.uid}
					      title={char.name}
					      subtitleLines={[]}
					      onLearnMore={() => navigate(`/character/${char.uid}`)}
					      isFavorite={store.favorites.some(f => f.uid === char.uid && f.type === "character")}
					      onToggleFavorite={() =>
					        dispatch({
					          type: "TOGGLE_FAVORITE",
					          payload: { uid: char.uid, name: char.name, type: "character" }
					        })
					      }
					    />
					  ))}
					</HorizontalScroll>
				  
					<HorizontalScroll title="Planets">
					  {store.planets.map((planet) => (
					    <Card
					      key={planet.uid}
					      title={planet.name}
					      subtitleLines={[]}
					      onLearnMore={() => navigate(`/planet/${planet.uid}`)}
					      isFavorite={store.favorites.some(f => f.uid === planet.uid && f.type === "planet")}
					      onToggleFavorite={() =>
					        dispatch({
					          type: "TOGGLE_FAVORITE",
					          payload: { uid: planet.uid, name: planet.name, type: "planet" }
					        })
					      }
					    />
					  ))}
					</HorizontalScroll>
				  
					<HorizontalScroll title="Starships">
					  {store.starships.map((ship) => (
					    <Card
					      key={ship.uid}
					      title={ship.name}
					      subtitleLines={[]}
					      onLearnMore={() => navigate(`/starship/${ship.uid}`)}
					      isFavorite={store.favorites.some(f => f.uid === ship.uid && f.type === "starship")}
					      onToggleFavorite={() =>
					        dispatch({
					          type: "TOGGLE_FAVORITE",
					          payload: { uid: ship.uid, name: ship.name, type: "starship" }
					        })
					      }
					    />
					  ))}
					</HorizontalScroll>
				</>
			)}
		</div>
	);
};
