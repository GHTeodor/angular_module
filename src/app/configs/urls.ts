import {environment} from '../../environments/environment';
import {IUrls} from './urls.interface';

const {baseURL} = environment;

export const urls: IUrls = {

  movies: `${baseURL}/discover/movie?api_key/uk-UA`,

  movie: (movie_id: number) => `${baseURL}/movie/${movie_id}?api_key/uk-UA`,
  videos: (movie_id: number) => `${baseURL}/movie/${movie_id}/videos?api_key/uk-UA`,
  images: (movie_id: number) => `${baseURL}/movie/${movie_id}/images?api_key`,

  query: `${baseURL}/search/movie?api_key/uk-UA`,

  genres: `${baseURL}/genre/movie/list?api_key/uk-UA`
};
