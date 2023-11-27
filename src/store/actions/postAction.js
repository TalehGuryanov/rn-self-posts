import {ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED} from "../types";
import {DB} from "../../db";
import * as FileSystem from 'expo-file-system';

export const loadPostsActionCreator = () => {
  return async dispatch => {
    const posts = await DB.getPosts();

    dispatch({
      type: LOAD_POSTS,
      payload: posts
    })
  }
}

export const toggleBookedActionCreator = post => async dispatch => {
  await DB.updatePost(post);
  
  dispatch ({
    type: TOGGLE_BOOKED,
    payload: post.id
  })
}

export const removePostActionCreator = id => async dispatch => {
  await DB.removePost(id);
  
  dispatch({
    type: REMOVE_POST,
    payload: id
  })
}

export const addPostActionCreator = post => async dispatch => {
  const fileName = post.img.split('/').pop();
  const newPath = FileSystem.documentDirectory + fileName;
  
  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img
    })
  } catch (e) {
    console.log(e);
  }
  
  const payload = {...post, img: newPath};
  payload.id = await DB.createPost(payload);
  
  dispatch({
    type: ADD_POST,
    payload
  })
}