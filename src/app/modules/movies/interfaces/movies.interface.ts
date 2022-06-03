export interface IMovies {
  page: number;
  results: IMovie[];
}

export interface IMovie {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}
