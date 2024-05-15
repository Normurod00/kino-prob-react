import { Component } from "react";
import "./movi-list-item.css";

class MovieListItem extends Component {
  render() {
    const { name, viewers, onDelete, onToggleFavorite, onToggleLike, favorite, like } = this.props;
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${favorite && "favorite"} ${like && 'like'}`}>
        <button onClick={onToggleLike} className="list-group-item-label">
          {name}
        </button>
        <input
          className="list-group-item-input" type="number" defaultValue={viewers}></input>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm" onClick={onToggleFavorite}>
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default MovieListItem;
