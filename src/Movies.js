import { useState } from 'react';
import { Counter } from './Counter';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';




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
        <h2 className='movie-name'>{movie.name}
        <IconButton onClick={()=>navigate("/movies/"+id)} color="primary">
      <InfoIcon/>
      </IconButton>
      <IconButton onClick={() => setShow(!show)} color="primary">
      {show ? <ExpandLessIcon/>:<ExpandMoreIcon/>}
      </IconButton>
        </h2>
        <p style={style} className='movie-rating'>⭐{movie.rating}</p>
      </div>
      
      <p style={summarystyles} className='movie-summary'>{movie.summary}</p>
      <Button>Edit</Button>
      <Counter />
    </div>
  );
}
