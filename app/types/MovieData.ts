export interface MovieRating {
  Source: string;
  Value: string;
}

export interface MovieSuccessResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: "True";
}

export interface MovieErrorResponse {
  Response: "False";
  Error: string;
}

export type MovieResponse = MovieSuccessResponse | MovieErrorResponse;
