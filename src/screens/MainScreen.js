import {Post} from "../components/Post";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import { useLayoutEffect } from 'react';
import {PostList} from "../components/PostList";
import {loadPostsActionCreator} from "../store/actions/postAction";
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import {THEME} from "../theme";

export const MainScreen = ({navigation}) => {
  const allPosts = useSelector(state => state.posts.allPosts);
  const loading = useSelector(state => state.posts.loading);
  const dispatch = useDispatch();
  
  const openPostHandler = post => {
    navigation.navigate('Post', {postId: post.id})
  }
  
  useEffect(() => {
    dispatch(loadPostsActionCreator())
  }, [dispatch])
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon} style={{marginHorizontal: 0}}>
            <Item title="Take photo" iconName="ios-camera" onPress={() => navigation.navigate('Create')} style={{marginHorizontal: 0}}/>
          </HeaderButtons>),
      headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} style={{marginHorizontal: 0}}/>
          </HeaderButtons>),
    });
  }, [])
  
  if(loading) {
    return <View style={styles.center}>
      <ActivityIndicator color={THEME.MAIN_COLOR}/>
    </View>;
  }
  
  return (
      <PostList onOpen={openPostHandler} data={allPosts}/>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});