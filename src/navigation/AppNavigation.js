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
const CreateStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();
const PostsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function PostNavigator ( ) {
  return (
      <PostsStack.Navigator initialRouteName="Booked Stack" screenOptions={headerStyle}>
        <PostsStack.Screen
            name="Main"
            component={MainScreen}
            options={{title: "Main"}}
        />
        <PostsStack.Screen
            name="Post"
            component={PostScreen}
            options={({ route }) => ({ title: ` Post ${route.params.postId}` })}
        />
      </PostsStack.Navigator>
  );
}

function BookedNavigator ( ) {
  return (
      <HomeStack.Navigator screenOptions={headerStyle}>
        <HomeStack.Screen
            name="Booked Posts"
            component={BookedScreen}
            options={{title: "Booked"}}
        />
        <HomeStack.Screen
            name="Post"
            component={PostScreen}
            options={({ route }) => ({ title: ` Post ${route.params.postId}` })}
        />
      </HomeStack.Navigator>
  );
}

function AboutNavigator ( ) {
  return (
      <AboutStack.Navigator initialRouteName="About" screenOptions={headerStyle}>
        <AboutStack.Screen
            name="About Stack"
            component={AboutScreen}
            options={{title: "About"}}
        />
      </AboutStack.Navigator>
  );
}

function CreateNavigator ( ) {
  return (
      <CreateStack.Navigator initialRouteName="Create" screenOptions={headerStyle}>
        <CreateStack.Screen
            name="Create Stack"
            component={CreateScreen}
            options={{title: "Create a post"}}
        />
      </CreateStack.Navigator>
  );
}

function BottomTabNavigator ( ) {
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
        <Tab.Screen name="Home" component={PostNavigator} />
        <Tab.Screen name="Booked" component={BookedNavigator} />
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
            component={BottomTabNavigator}
        />
        <Drawer.Screen name="About" component={AboutNavigator} />
        <Drawer.Screen name="Create" component={CreateNavigator} />
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