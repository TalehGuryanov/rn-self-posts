import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useState, useCallback, useEffect } from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

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
    <View onLayout={onLayoutRootView}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

