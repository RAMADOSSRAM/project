import { useState } from 'react';
import { Counter } from './Counter';
import { useNavigate } from "react-router-dom";


export function Movies({ movie,id}) {

  const style = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const navigate =useNavigate();

  const [show, setShow] = useState(true);
  const summarystyles = {
    display: show ? "block" : "none",
  };
  return (
    <div className='movie-container'>
      <img className='movie-poster' src={movie.poster} alt={movie.poster} />
      <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name}</h2>
        <p style={style} className='movie-rating'>⭐{movie.rating}</p>
      </div>
      <button type="button" onClick={()=>navigate("/movies/"+id)}>info</button>
      <button onClick={() => setShow(!show)}>description</button>
      <p style={summarystyles} className='movie-summary'>{movie.summary}</p>
      <Counter />
    </div>
  );
}
