
import logo from './logo.svg';
import './App.css';
import { Page } from './Page';
import { Routes, Route, Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { AddMovie, MovieList } from './MovieList';
import { MovieDetails } from './MovieDetails';
import { NotFound } from './NotFound';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { minHeight } from '@mui/system';
import { API } from './global';
import TextField from '@mui/material/TextField';



function App() {
  
  const [movieList,setMovieList]=useState([]);
  useEffect(()=>{
    fetch(`${API}/movies`)
    .then((data)=>data.json())
    .then((movies)=>setMovieList(movies));
  },[]);
  const navigate=useNavigate();
  const [mode,setMode] = useState("light");
  const theme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <ThemeProvider theme={theme} >
      <Paper elevation={3} style={{minHeight:"100vh"}} >
    <div className="App">
      {/* <MovieList /> */} 
      <AppBar position="static">
        <Toolbar>
          
          <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
          <Button color="inherit" onClick={()=>navigate("/movie")}>movie</Button>
          <Button color="inherit" onClick={()=>navigate("/movie/add")}>AddMovie</Button>
          <Button color="inherit" onClick={()=> setMode (mode==="dark" ? "light":"dark")}>
            {mode==="dark" ? "light":"dark"} mode
          </Button>

        </Toolbar>
      </AppBar>
      
      <Routes>
        <Route path="/movie/edit/:id" element={<EditMovie />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieList movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/movie/add" element={<AddMovie />} />
        <Route path="/films" element={<Navigate repaace to="/movie" />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate repaace to="/404" />} />
      </Routes>
    </div>
    </Paper>
    </ThemeProvider>

  );
}
function EditMovie(){
  const{id}= useParams();
  const [movie,setMovie]= useState(null);
  useEffect(()=>{
    fetch(`${API}/movies${id}`)
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv));
  },[id]);
  return(
    <div>
      {movie ? <EditMovieForm movie={movie}/>:"Loading..."}
    </div>
  );
}
function EditMovieForm({movie}){
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const navigate=useNavigate();

  const addMovie =()=>{
    const updateMovie={
      name,
      poster,
      rating, 
      summary, 
      trailer,
    };

  fetch(`${API}/movies/${movie.id}`,{
    method:"PUT",
    body:JSON.stringify(updateMovie),
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
          type="text" placeholder='Name' value={name} />
        <TextField
          onChange={(evant) => setPoster(evant.target.value)}
          type="text" placeholder='Poster' value={poster} />
        <TextField
          onChange={(evant) => setRating(evant.target.value)}
          type="text" placeholder='Rating' value={rating} />
        <TextField
          onChange={(evant) => setSummary(evant.target.value)}
          type="text" placeholder='Summary' value={summary} />
        <TextField
          onChange={(evant) => setTrailer(evant.target.value)}
          type="text" placeholder='Trailer' value={trailer} />
        <Button variant="contained" onClick={EditMovie}>save</Button>


      </div>
    </div>
  );
}
function Home(){
  return(
    <div>
      wlcome
    </div>
  );
}
export default App;


