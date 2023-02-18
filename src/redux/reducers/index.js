import { combineReducers } from "redux";
import getAllPostsReducer from "./getAllPosts";

const AppReducers = combineReducers({
  posts: getAllPostsReducer,
});

export default AppReducers;
