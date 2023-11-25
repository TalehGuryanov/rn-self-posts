import {LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED} from "../types";
import {DATA} from "../../data";

export const loadPostsActionCreator = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA
  }
}

export const toggleBookedActionCreator = id => {
  return {
    type: TOGGLE_BOOKED,
    payload: id
  }
}

export const removePostActionCreator = id => {
  return {
    type: REMOVE_POST,
    payload: id
  }
}