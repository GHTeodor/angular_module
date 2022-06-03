export interface IMoviesByGenre {
  page: number;
  results: IMovieByGenre[];
  total_pages: number;
  total_results: number;
}

interface IMovieByGenre {
  id: number;
  genre_ids: number[];
  release_date: string;
  title: string;
  poster_path: string;
  overview: string;
}
