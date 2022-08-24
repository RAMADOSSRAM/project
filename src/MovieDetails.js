import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";

export function MovieDetails() {
  const { id } = useParams();
  
  const [movie,setMovie]= useState({});
  useEffect(()=>{
    fetch(`${API}/movies/${id}`)
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv));
  },[id]);
  const navigate = useNavigate();
  const style = {
    color: movie.rating > 8 ? "green" : "red",
  };

  return (
    <div>
      <div className='movie-datailcontainer'>
        <iframe width="100%" height="498" src={movie.trailer} alt={movie.trailer}
          title="youtube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
           gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className='movie-specs'>
          <h2 className='movie-name'>{movie.name}</h2>
          <p style={style} className='movie-rating'>⭐{movie.rating}</p>
        </div>
        <p className='movie-summary'>{movie.summary}</p>
        <button variant="contained" onClick={() => navigate(-1)}>back</button>
      </div>

    </div>
  );
}
