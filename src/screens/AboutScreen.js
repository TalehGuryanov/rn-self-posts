import { Text, View, StyleSheet } from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {useLayoutEffect} from "react";

export const AboutScreen = ({navigation}) => {
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
  return (
      <View style={styles.center}>
        <Text>
          About Screen
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});