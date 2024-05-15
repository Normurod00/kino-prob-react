import React from "react";
import "./movie-list.css";
import MovieListItem from "../movie-list-item/movi-list-item";

const MovieList = ({ data, onDelete, onToggleFavorite, onToggleLike }) => {
    return (
        <ul className="movie-list">
            {data.map((item) => (
                <MovieListItem
                    key={item.id}
                    name={item.name}
                    viewers={item.viewers}
                    favourite={item.favourite}
                    onDelete={() => onDelete(item.id)}
                    onToggleFavorite= {()=> onToggleFavorite(item.id)}
                    onToggleLike={()=> onToggleLike(item.id)}
                />
            ))}
        </ul>
    );
};

export default MovieList;
