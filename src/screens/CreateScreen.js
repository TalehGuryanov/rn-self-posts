import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard, View
} from 'react-native';
import {useLayoutEffect, useState} from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {THEME} from "../theme";
import {useDispatch} from "react-redux";
import {addPostActionCreator} from "../store/actions/postAction";
import {PhotoPicker} from "../components/PhotoPicker";

export const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [img, setImg] = useState('');
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle drawer"
                  iconName="ios-menu"
                  onPress={() => navigation.toggleDrawer()}
                  style={{marginHorizontal: 0}}
            />
          </HeaderButtons>),
    });
  }, [])
  
  const savePostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: img,
      booked: false,
    }
    
    dispatch(addPostActionCreator(post))
    navigation.navigate('Main')
  }
  
  const photoPickHandler = (uri) => {
    setImg(uri);
  }
  
  return (
      <ScrollView >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>
              Create a new post
            </Text>
  
            <TextInput
                style={styles.textArea}
                placeholder={"Add a text"}
                value={text}
                onChangeText={setText}
                multiline={true}
            />
  
            <PhotoPicker onPick={photoPickHandler}/>
  
            <Button
                title="Create post"
                color={THEME.MAIN_COLOR}
                onPress={savePostHandler}
                disabled={!text || !img}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-sans-regular',
    marginVertical: 10,
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
  }
});