import { Text, View, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import {THEME} from "../theme";
import React, {useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {removePostActionCreator, toggleBookedActionCreator} from "../store/actions/postAction";

export const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const {postId} = route.params;
  const selectedPost = useSelector(state => state.posts.allPosts.find(p => p.id === postId));
  const isBooked = useSelector(state => state.posts.bookedPosts.some(post => post.id === postId));
  
  useLayoutEffect(() => {
    const iconName = isBooked ? 'ios-star' : 'ios-star-outline'
    
    navigation.setOptions({
      headerRight: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon} style={{marginHorizontal: 0}}>
            <Item title="Save as booked"
                  iconName={iconName}
                  onPress={() => dispatch(toggleBookedActionCreator(selectedPost))}
                  style={{marginHorizontal: 0}}
            />
          </HeaderButtons>),
    });
  }, [dispatch, isBooked, selectedPost]);
  
  const removeHandler = () => {
    Alert.alert(
        "Delete post",
        "Are you sure?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "Delete",
            style: 'destructive',
            onPress: () => {
              navigation.navigate('Main');
              dispatch(removePostActionCreator(postId));
            }
          }
        ],
        { cancelable: false }
    )
  }
  
  if(!selectedPost) {
    return null;
  }
  
  return (
      <ScrollView style={styles.center}>
        <Image source={{uri: selectedPost.img}} style={styles.image}/>
        
        <View style={styles.textWrapper}>
          <Text stye={styles.title}>
            {selectedPost.text}
          </Text>
        </View>
        
        <Button title="Remove post" color={THEME.DANGER_COLOR} onPress={removeHandler}/>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 100,
    objectFit: 'contain',
  },
  textWrapper: {
    padding: 10
  },
  title: {
    fontFamily: 'open-sans-regular'
  }
});