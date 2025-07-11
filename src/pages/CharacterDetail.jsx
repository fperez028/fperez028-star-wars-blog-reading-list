import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CharacterDetail = () => {
    const { id } = useParams();
    const { store } = useGlobalReducer();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        // Try to find in global store first
        const fromStore = store.people.find(p => p.uid === id);
        if (fromStore) {
            setCharacter(fromStore.properties);
        } else {
            // Fallback to API fetch if not in store
            fetch(`https://www.swapi.tech/api/people/${id}`)
                .then(res => res.json())
                .then(data => setCharacter(data.result.properties))
                .catch(err => console.error(err));
        }
    }, [id, store.people]);

    if (!character) return <p className="text-center">Loading character...</p>;

    const imageUrl = `https://i.pinimg.com/originals/5b/ec/40/5bec40e3ff803d6ebcb3ab7c46bd9fc7.png`;

    return (
        <div className="container text-center mt-5">
            <img
                src={imageUrl}
                alt={character.name}
                className="img-fluid mb-4"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "350px",
                    objectFit: "contain"
                }}
            />
            <h1>{character.name}</h1>
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
