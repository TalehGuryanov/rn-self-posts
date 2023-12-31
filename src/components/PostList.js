import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Post} from "./Post";

export const PostList = ({data, onOpen}) => {
  if(!data.length) {
    return <View style={styles.wrapper}>
      <Text style={styles.noItems}>
        No posts yet
      </Text>
    </View>
  }
  return (
      <View style={styles.wrapper}>
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Post post={item} onOpen={onOpen}/>}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noItems: {
    fontFamily: 'open-sans-regular',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
  }
});