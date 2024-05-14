import { Component } from "react";

import "./movi-list-item.css";


class MovieListItem extends Component {
  constructor(props) {
    super(props)
    this.state = { favourite: false, like: true }
  }

  onFavourite = () => {
    this.setState(({ favourite }) => ({
      favourite: !favourite
    }))
  }
  onLike = () => {
    this.setState(({ like }) => ({
      like: !like
    }))
  }
  render() {
    const { name, viewers, onDelete } = this.props
    const { favourite, like } = this.state
    return (
      <li
        className={`list-group-item d-flex justify-content-between 
        ${favourite && "favourite"} ${like && 'like'}`
        }>
        <span onClick={this.onLike} className="list-group-item-label"  >{name} </span>
        <input
          className="list-group-item-input" type="number" defaultValue={viewers}></input>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm" onClick={this.onFavourite} >
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