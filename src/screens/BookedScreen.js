import {Post} from "../components/Post";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import { useLayoutEffect } from 'react';
import {PostList} from "../components/PostList";
import {useSelector} from "react-redux";

export const BookedScreen = ({navigation}) => {
  const bookedPosts = useSelector(state => state.posts.bookedPosts);

  const openPostHandler = post => {
    navigation.navigate('Post', {postId: post.id})
  }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} style={{marginHorizontal: 0}}/>
          </HeaderButtons>),
    });
  }, [])
  
  return (
      bookedPosts && <PostList onOpen={openPostHandler} data={bookedPosts}/>
  )
}
