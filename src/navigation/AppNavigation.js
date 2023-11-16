import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {MainScreen} from "../screens/MainScreen";
import {AboutScreen} from "../screens/AboutScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {PostScreen} from "../screens/PostScreen";
import {THEME} from "../theme";

const Stack = createStackNavigator();


export const AppNavigation = () => {
  return  (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" screenOptions={headerStyle}>
          <Stack.Screen
              initialRouteName="Main"
              name="Main"
              component={MainScreen}
              options={{title: "Main"}}
          />
          <Stack.Screen
              name="About"
              component={AboutScreen}
              options={{title: "About"}}
          />
          <Stack.Screen
              name="Booked"
              component={BookedScreen}
              options={{title: "Booked"}}
          />
          <Stack.Screen
              name="Post"
              component={PostScreen}
              options={({ route }) => ({ title: ` Post ${route.params.postId}` })}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const headerStyle = {
  headerStyle: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
}