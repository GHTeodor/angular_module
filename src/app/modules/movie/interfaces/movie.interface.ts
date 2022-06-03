export interface IMovie {
  backdrop_path: string;
  poster_path: string;
  genres: {
    id: number,
    name: string
  }[];
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  budget: number;
  revenue: number;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
  homepage: string;
}
