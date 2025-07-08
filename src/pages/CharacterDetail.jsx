import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))
            .catch(err => console.error(err));
    }, [id]);

    if (!character) return <p className="text-center">Loading character...</p>;

    return (
        <div className="container mt-5">
            <h2>{character.name}</h2>
            <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">Birth Year: {character.birth_year}</li>
                <li className="list-group-item">Gender: {character.gender}</li>
                <li className="list-group-item">Height: {character.height}</li>
                <li className="list-group-item">Skin Color: {character.skin_color}</li>
                <li className="list-group-item">Eye Color: {character.eye_color}</li>
            </ul>
        </div>
    );
};
