import { Text, View, StyleSheet, FlatList } from 'react-native';
import {DATA} from "../data";
import {Post} from "../components/Post";

export const MainScreen = () => {
  return (
  <View style={styles.wrapper}>
    <FlatList
      data={DATA}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <Post post={item}/>}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  }
});