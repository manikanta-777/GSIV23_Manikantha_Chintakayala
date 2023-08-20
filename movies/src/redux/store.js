import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { moviesListReducer } from "./reducers/moviesListReducer";
import { movieDetailsReducer } from "./reducers/movieDetailsReducer";

const reducer = combineReducers({
  moviesList: moviesListReducer,
  movieDetails: movieDetailsReducer,
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
