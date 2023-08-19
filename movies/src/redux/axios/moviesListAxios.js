import axios from "axios";

const axiosInterceptor = (data) => {
  const { method, url } = data;
  return axios({
    method: method,
    url: url,
  });
};

export const getMovies = async (searchValue, page) => {
  let request = {
    method: "get",
    url: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&api_key=1afbcc3f6732dc30ef275cfc3c5fed30`,
  };
  if (searchValue !== "") {
    request = {
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?query=${searchValue}&page=${page}&api_key=1afbcc3f6732dc30ef275cfc3c5fed30`,
    };
  }
  const { data } = await axiosInterceptor(request);
  console.log("data in axios", data);
  return data;
};
