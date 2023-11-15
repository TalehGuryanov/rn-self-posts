import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {MainScreen} from "../screens/MainScreen";
import {AboutScreen} from "../screens/AboutScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {PostScreen} from "../screens/PostScreen";
import {StyleSheet} from 'react-native';
import {THEME} from "../theme";

const Stack = createStackNavigator();


export const AppNavigation = () => {
  return  (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
              initialRouteName="Main"
              name="Main"
              component={MainScreen}
              options={{title: "Main", headerStyle: styles.header, headerTintColor: "#fff"}}
          />
          <Stack.Screen
              name="About"
              component={AboutScreen}
              options={{title: "About", headerStyle: styles.header}}
          />
          <Stack.Screen
              name="Booked"
              component={BookedScreen}
              options={{title: "Booked", headerStyle: styles.header}}
          />
          <Stack.Screen
              name="Post"
              component={PostScreen}
              options={{title: "Post", headerStyle: styles.header}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: THEME.MAIN_COLOR,
  }
});