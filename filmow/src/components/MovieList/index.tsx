import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';

export interface Movietype{
  
   id: number,
   title: string,
   poster_path: string
   overview: string,
   vote_average: number

}

export default function MovieList() {
  const [movies, setmovies] = useState<Movietype[]>([]);

  useEffect(() => {
    getmovies()
  }, []);

  const getmovies = () => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '43f4995c0b0bba04e5b812c4fd828036',
        language: 'pt-BR'
      }
    }).then(response => {
      setmovies(response.data.results)
    })
  }



  return (
    <ul className='movie-list'>
      {movies.map((movie) =>
        <li key={movie.id} className='movie-card'>
            <p className='movie-title'>
              {movie.title}
            </p>
            <p className='movie-description'>
              {movie.overview}
            </p>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='' />
            <p>
              {movie.vote_average}
            </p>
        </li>
      )}
    </ul>
  )
}