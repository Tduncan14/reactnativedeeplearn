import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from "expo-navigation-bar"


NavigationBar.setBackgroundColorAsync('#fff');
NavigationBar.setButtonStyleAsync('dark')

export default function RootLayout() {
  return <>
    <StatusBar style="dark" />
    {/* <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }} />

      <Stack.Screen
        name="products"
        options={{
          title: "Products Screen", 
        }} />


    </Stack> */}

    <Stack
      screenOptions={{
        headerShown: false
      }}>

    </Stack>
  </>
}
