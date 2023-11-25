import {LOAD_POSTS} from "../types";
import {DATA} from "../../data";

export const loadPostsActionCreator = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA
  }
}