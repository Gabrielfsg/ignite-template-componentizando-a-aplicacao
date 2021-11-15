import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MovieProprier {
  movies: MovieProps[];
  genreSelected: string;
}


export function Content(props: MovieProprier) {
  return ( <div className="container">
  <header>
    <span className="category">Categoria:<span> {props.genreSelected}</span></span>
  </header>
  <main>
    <div className="movies-list">
      {props.movies.map(prop => (
        <MovieCard key ={prop.imdbID} title={prop.Title} poster={prop.Poster} runtime={prop.Runtime} rating={prop.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>
  )
}