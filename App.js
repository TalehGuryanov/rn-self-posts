import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { useState, useCallback, useEffect } from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {AppNavigation} from "./src/navigation/AppNavigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'open-sans-regular': require('./assets/fonts/opensans-regular.ttf'),
          'open-sans-bold': require('./assets/fonts/opensans-bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    
    prepare();
  }, []);
  
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  
  if (!appIsReady) {
    return null;
  }
  
  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <AppNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

