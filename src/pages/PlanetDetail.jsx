import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PlanetDetail = () => {
    const { id } = useParams();
    const { store } = useGlobalReducer();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        // Try to find in global store first
        const fromStore = store.planets.find(p => p.uid === id);
        if (fromStore) {
            setPlanet(fromStore.properties);
        } else {
            // Fallback to API fetch if not in store
            fetch(`https://www.swapi.tech/api/planets/${id}`)
                .then(res => res.json())
                .then(data => setPlanet(data.result.properties))
                .catch(err => console.error(err));
        }
    }, [id, store.people]);

    if (!planet) return <p className="text-center">Loading planet...</p>;

    const imageUrl = `https://i.pinimg.com/originals/5b/ec/40/5bec40e3ff803d6ebcb3ab7c46bd9fc7.png`;

    return (
        <div className="container text-center mt-5">
            <img
				src={imageUrl}
				alt={planet.name}
				className="img-fluid mb-4"
				style={{ 
                    maxWidth: "100%", 
                    height: "auto",
                    maxHeight: "350px", 
                    objectFit: "contain" }}
			/>
            <h1>{planet.name}</h1>
            <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">Population: {planet.population}</li>
                <li className="list-group-item">Terrain: {planet.terrain}</li>
                <li className="list-group-item">Climate: {planet.climate}</li>
                <li className="list-group-item">Diameter: {planet.diameter}</li>
                <li className="list-group-item">Rotation Period: {planet.rotation_period}</li>
                <li className="list-group-item">Orbital Period: {planet.orbital_period}</li>
            </ul>
        </div>
    );
};