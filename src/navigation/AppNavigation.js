import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {MainScreen} from "../screens/MainScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {PostScreen} from "../screens/PostScreen";
import {THEME} from "../theme";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from "@expo/vector-icons/Ionicons";
import {AboutScreen} from "../screens/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen";

const HomeStack = createNativeStackNavigator();
const PostsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

function AboutStackScreen ( ) {
  return (
      <HomeStack.Navigator initialRouteName="About" screenOptions={headerStyle}>
        <HomeStack.Screen
            name="About Stack"
            component={AboutScreen}
            options={{title: "About"}}
        />
      </HomeStack.Navigator>
  );
}

function CreateStackScreen ( ) {
  return (
      <HomeStack.Navigator initialRouteName="Create" screenOptions={headerStyle}>
        <HomeStack.Screen
            name="Create Stack"
            component={CreateScreen}
            options={{title: "Create a post"}}
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

function DrawerNavigator ( ) {
  return (
      <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerType: 'front',
            drawerHideStatusBarOnOpen: true,
            headerShown: false,
            drawerActiveTintColor: THEME.MAIN_COLOR,
            drawerLabelStyle: {fontFamily: 'open-sans-regular'},
          }}
      >
        <Drawer.Screen
            name="Main"
            component={TabNavigator}
        />
        <Drawer.Screen name="About" component={AboutStackScreen} />
        <Drawer.Screen name="Create" component={CreateStackScreen} />
      </Drawer.Navigator>
  );
}

export const AppNavigation = () => {
  return  (
      <NavigationContainer>
        <DrawerNavigator />
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