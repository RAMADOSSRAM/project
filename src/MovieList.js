import { Movies } from './Movies';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { API } from './global';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

export function MovieList() {
  const[movieList,setMovieList]=useState([]);
  useEffect(()=>{
    fetch(`${API}/movies`)
    .then((data)=>data.json())
    .then((movies)=>setMovieList(movies));
  },[]);
  return (
    <div>
      
      <div className='movie-list'>
        {movieList.map((mv) => 
       <Movies key={mv.id} movie={mv} id={mv.id} />)}
      </div>
    </div>
  );
}
export function AddMovie({ movieList, setMovieList }){
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate=useNavigate();

  const addMovie =()=>{
    const newMovie={
      name,
      poster,
      rating, 
      summary, 
      trailer,
    };

  fetch(`${API}/movies`,{
    method:"POST",
    body:JSON.stringify(newMovie),
    header:{
      "content-Type":"application/json",
    },
  }).then((data)=>navigate("/movies"));
};

  return(
    <div>
      <div className='add-movie'>
        <TextField
          onChange={(evant) => setName(evant.target.value)}
          type="text" placeholder='Name' />
        <TextField
          onChange={(evant) => setPoster(evant.target.value)}
          type="text" placeholder='Poster' />
        <TextField
          onChange={(evant) => setRating(evant.target.value)}
          type="text" placeholder='Rating' />
        <TextField
          onChange={(evant) => setSummary(evant.target.value)}
          type="text" placeholder='Summary' />
        <TextField
          onChange={(evant) => setTrailer(evant.target.value)}
          type="text" placeholder='Trailer' />
        <Button variant="contained" onClick={() => {
          const newMovie = { name, poster, rating, summary, trailer };
          setMovieList([...movieList, newMovie]);
        }}>Add Movie</Button>
      </div>
    </div>
  );
}
