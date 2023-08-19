import axios from "axios";

const axiosInterceptor = (data) => {
  const { method, url } = data;
  return axios({
    method: method,
    url: url,
  });
};

export const getMovieDetails = async (id) => {
  const request = {
    method: "get",
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=1afbcc3f6732dc30ef275cfc3c5fed30`,
  };
  const { data } = await axiosInterceptor(request);
  console.log("movieDetails in axio", data);

  return data;
};
