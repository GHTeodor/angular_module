import {environment} from '../../environments/environment';
import {IUrls} from "./urls.interface";

const {baseURL, apiKey, UA} = environment;

export const urls: IUrls = {
  movies: `${baseURL}/discover/movie${apiKey}${UA}`,

  movie: (movie_id: number) => `${baseURL}/movie/${movie_id}${apiKey}${UA}`,
  videos: (movie_id: number) => `${baseURL}/movie/${movie_id}/videos${apiKey}${UA}`,
  images: (movie_id: number) => `${baseURL}/movie/${movie_id}/images${apiKey}`,

  query: `${baseURL}/search/movie${apiKey}${UA}&query=`,

  genres: `${baseURL}/genre/movie/list${apiKey}${UA}`
};
