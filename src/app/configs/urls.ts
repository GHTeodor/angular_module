import {environment} from '../../environments/environment';

const {API_1, API_2} = environment;

export const urls = {
  users: `${API_1}/users`,
  posts: `${API_1}/posts`,
  comments: `${API_1}/comments`,
  todos: `${API_1}/todos`,

  cars: `${API_2}/cars`
};
