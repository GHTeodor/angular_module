export interface IFoundMovies {
  page: number,
  results: IFoundMovie[],
  total_pages: number,
  total_results: number
}

export interface IFoundMovie {
  id: number;
  backdrop_path: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
}
