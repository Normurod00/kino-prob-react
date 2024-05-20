import "./movi-list-item.css";

const MovieListItem = (props)=>{
  const { name, viewers, onDelete, onToggleProp, favorite, like } = props;
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${favorite && "favorite"} ${like && 'like'}`}>
      <button onClick={onToggleProp} className="list-group-item-label " data-toggle='like'>
        {name}
      </button>
      <input
        className="list-group-item-input" type="number" defaultValue={viewers}></input>
      <div className="d-flex justify-content-center align-items-center w-25" >
        <button type="button" className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle='favorite'>
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
export default MovieListItem;
