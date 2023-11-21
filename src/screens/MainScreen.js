import {DATA} from "../data";
import {Post} from "../components/Post";
import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import { useLayoutEffect } from 'react';
import {PostList} from "../components/PostList";

export const MainScreen = ({navigation}) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {postId: post.id})
  }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon} style={{marginHorizontal: 0}}>
            <Item title="Take photo" iconName="ios-camera" onPress={() => console.log('Press photo')} style={{marginHorizontal: 0}}/>
          </HeaderButtons>),
      headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle drawer" iconName="ios-menu" onPress={() => console.log('menu')} style={{marginHorizontal: 0}}/>
          </HeaderButtons>),
    });
  }, [])
  
  return (
      <PostList onOpen={openPostHandler} data={DATA}/>
  )
}