import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetailsPage from "./component/pages/movieDetailsPage/MovieDetailsPage";
import { MoviesListPage } from "./component/pages/moviesListPage/MoviesListPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MoviesListPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
