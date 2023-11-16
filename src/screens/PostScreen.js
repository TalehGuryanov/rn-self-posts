import { Text, View, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import {DATA} from "../data";
import {THEME} from "../theme";
import React, {useLayoutEffect, useCallback} from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const PostScreen = ({ route, navigation }) => {
  const {postId} = route.params;
  
  const findPost = useCallback(() => {
    return DATA.find(p => p.id === postId)
  }, [postId]);
  const post = findPost();
  
  const removeHandler = () => {
    Alert.alert(
        "Delete post",
        "Are you sure?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "Delete", style: 'destructive', onPress: () => {} }
        ],
        { cancelable: false }
    )
  }
  
  useLayoutEffect(() => {
    const isBooker = post.booked;
    const iconName = isBooker ? 'ios-star' : 'ios-star-outline'
    navigation.setOptions({
      headerRight: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon} style={{marginHorizontal: 0}}>
            <Item title="Take photo" iconName={iconName} onPress={() => console.log('booked')} style={{marginHorizontal: 0}}/>
          </HeaderButtons>),
    });
  }, [])
  
  return (
      <ScrollView style={styles.center}>
        <Image source={{uri: post.img}} style={styles.image}/>
        
        <View style={styles.textWrapper}>
          <Text stye={styles.title}>
            {post.text}
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