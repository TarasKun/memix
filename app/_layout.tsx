import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Pressable, Text } from "react-native";
import BottomBar from "@/components/bottonBar/BottomBar";

SplashScreen.preventAutoHideAsync();
import { useIncrement } from '../stores';
import Header from "@/components/header/Header";
import CollectionList from "@/components/collectionsList/CollectionsList";


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const { count, increase, decrease } = useIncrement();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Header />
      <CollectionList/>
      {/*<Text>{count}</Text>*/}
      {/*<Pressable*/}
      {/*    onPress={increase}*/}
      {/*    style={({ pressed }) => ({*/}
      {/*      backgroundColor: pressed ? '#ddd' : '#6200EE',*/}
      {/*      padding: 10,*/}
      {/*      borderRadius: 5,*/}
      {/*    })}*/}
      {/*>*/}
      {/*  <Text style={{ color: 'white', fontSize: 16 }}>+</Text>*/}
      {/*</Pressable>*/}
      <BottomBar />
    </ThemeProvider>
  );
}
