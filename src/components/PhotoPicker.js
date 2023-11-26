import * as ImagePicker from 'expo-image-picker';
import {View, StyleSheet, Button, Image, Alert} from "react-native";
import {useState} from "react";

export const PhotoPicker = ({onPick}) => {
  const [image, setImage] = useState(null);
  
  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  
    if (permissionResult.granted === false) {
      Alert.alert('The permission was rejected');
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: false,
      aspect: [16, 9]
    })
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onPick(result.assets[0].uri)
    }
  }
  
  return (
    <View style={styles.wrapper}>
      <Button title={"Take a photo"} onPress={takePhoto}/>
  
      {image && <Image source={{uri: image}} style={styles.image}/>}
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  }
})