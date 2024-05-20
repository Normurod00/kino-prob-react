import React from "react";
import "./movie-list.css";
import MovieListItem from "../movie-list-item/movi-list-item";

const MovieList = ({ data, onDelete, onToggleProp }) => {
    return (
        <ul className="movie-list">
            {data.map((item) => (
                <MovieListItem
                    key={item.id}
                    name={item.name}
                    viewers={item.viewers}
                    favorite={item.favorite}
                    like={item.like}
                    onDelete={() => onDelete(item.id)}
                    onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
                />
            ))}
        </ul>
    );
};

export default MovieList;
