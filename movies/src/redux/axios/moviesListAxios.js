import axios from "axios";

const axiosInterceptor = (data) => {
  const { method, url } = data;
  return axios({
    method: method,
    url: url,
  });
};

export const getMovies = async () => {
  const request = {
    method: "get",
    url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2&api_key=1afbcc3f6732dc30ef275cfc3c5fed30",
  };
  const { data } = await axiosInterceptor(request);
  // const newData = await ProductsMiddleware(data);
  console.log("data in axios",data);
  return data;
};
