import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const StarshipDetail = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/starships/${id}`)
            .then(res => res.json())
            .then(data => setStarship(data.result.properties))
            .catch(err => console.error(err));
    }, [id]);

    if (!starship) return <p className="text-center">Loading starship...</p>;

    const imageUrl = `https://i.pinimg.com/originals/5b/ec/40/5bec40e3ff803d6ebcb3ab7c46bd9fc7.png`;

    return (
        <div className="container text-center mt-5">
            <img
				src={imageUrl}
				alt={starship.name}
				className="img-fluid mb-4"
				style={{ height: "350px", objectFit: "cover" }}
			/>
            <h2>{starship.name}</h2>
            <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">Model: {starship.model}</li>
                <li className="list-group-item">Manufacturer: {starship.manufacturer}</li>
                <li className="list-group-item">Cost: {starship.cost_in_credits} credits</li>
                <li className="list-group-item">Crew: {starship.crew}</li>
                <li className="list-group-item">Length: {starship.length}</li>
            </ul>
        </div>
    );
};