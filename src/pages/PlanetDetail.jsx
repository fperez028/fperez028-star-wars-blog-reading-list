import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetail = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
            .then(res => res.json())
            .then(data => setPlanet(data.result.properties))
            .catch(err => console.error(err));
    }, [id]);

    if (!planet) return <p className="text-center">Loading planet...</p>;

    return (
        <div className="container mt-5">
            <h2>{planet.name}</h2>
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