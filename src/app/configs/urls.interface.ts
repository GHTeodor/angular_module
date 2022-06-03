export interface IUrls {
  movies: string;

  movie: (movie_id: number) => string;
  videos: (movie_id: number) => string;
  images: (movie_id: number) => string;

  query: string;

  genres: string;
}
