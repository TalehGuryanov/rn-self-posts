import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MainScreen} from "../screens/MainScreen";
import {AboutScreen} from "../screens/AboutScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {PostScreen} from "../screens/PostScreen";
import {THEME} from "../theme";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeStack = createNativeStackNavigator();
const PostsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PostsStackScreen ( ) {
  return (
      <PostsStack.Navigator initialRouteName="Booked Stack" screenOptions={headerStyle}>
        <PostsStack.Screen
            name="Booked Stack"
            component={BookedScreen}
            options={{title: "Booked"}}
        />
        <PostsStack.Screen
            name="Post"
            component={PostScreen}
            options={({ route }) => ({ title: ` Post ${route.params.postId}` })}
        />
      </PostsStack.Navigator>
  );
}

function  HomeStackScreen ( ) {
  return (
      <HomeStack.Navigator initialRouteName="Main" screenOptions={headerStyle}>
        <HomeStack.Screen
            initialRouteName="Main"
            name="Main"
            component={MainScreen}
            options={{title: "Main"}}
        />
        <HomeStack.Screen
            name="Post"
            component={PostScreen}
            options={({ route }) => ({ title: ` Post ${route.params.postId}` })}
        />
      </HomeStack.Navigator>
  );
}

function  TabNavigator ( ) {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({color}) => {
          let iconName;
  
          if (route.name === 'Home') {
            iconName = 'ios-albums';
          } else if (route.name === 'Booked') {
            iconName = 'ios-star';
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: THEME.MAIN_COLOR,
        })}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Booked" component={PostsStackScreen} />
      </Tab.Navigator>
  );
}


export const AppNavigation = () => {
  return  (
      <NavigationContainer>
        <TabNavigator />
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