import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import {useCallback, useEffect, useState} from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {AppNavigation} from "./src/navigation/AppNavigation";
import {Provider} from 'react-redux'
import {store} from "./src/store";
import {DB} from "./src/db";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/opensans-bold.ttf'),
    'open-sans-regular': require('./assets/fonts/opensans-regular.ttf'),
  });
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    async function initDb() {
      try {
        const db = await DB.init();
        setDatabase(db);
      } catch (e) {
        console.log(e);
      }
    }
  
    initDb();
  }, []);
  
  const onLayoutRootView = useCallback(async () => {
    if (database && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [database, fontsLoaded]);
  
  if (!fontsLoaded || !database) {
    return null;
  }
  
  return (
      <Provider store={store}>
        <View onLayout={onLayoutRootView} style={styles.container}>
          <AppNavigation/>
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

