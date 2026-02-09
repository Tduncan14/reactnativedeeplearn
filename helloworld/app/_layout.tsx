import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from "expo-navigation-bar"


NavigationBar.setBackgroundColorAsync('#fff');
NavigationBar.setButtonStyleAsync('dark')

export default function RootLayout() {
  return <>
    <StatusBar style="dark" />
    <Stack />
  </>
}
