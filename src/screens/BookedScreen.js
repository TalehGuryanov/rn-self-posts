import {DATA} from "../data";
import {Post} from "../components/Post";
import React, {useMemo} from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import { useLayoutEffect } from 'react';
import {PostList} from "../components/PostList";

export const BookedScreen = ({navigation}) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {postId: post.id})
  }
  
  const filteredData = useMemo(() => DATA.filter(post => post.booked), [DATA])
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle drawer" iconName="ios-menu" onPress={() => console.log('menu')} style={{marginHorizontal: 0}}/>
          </HeaderButtons>),
    });
  }, [])
  
  return (
      filteredData && <PostList onOpen={openPostHandler} data={filteredData}/>
  )
}
