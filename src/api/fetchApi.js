import axios from 'axios';

 export const fetchMovie = async (path, query, page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${path}`, {
    method: 'get',
    params: {
      api_key: 'a81c1605085a06fbd0d7cd3eb503f28e',
      query: query,
      page: page,
    },
  });

  return response.data;
};
