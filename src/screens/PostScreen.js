import { Text, View, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native';
import {DATA} from "../data";
import {THEME} from "../theme";

export const PostScreen = ({ route }) => {
  const {postId} = route.params;
  const post = DATA.find(p => p.id === postId)
  
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