import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
 
  const [login ,setlogin]=useState(true);
  return (
    <Stack  screenOptions={{headerShown:false}} >{login ?
     <Stack.Screen name="(tabs)"/>:
     <Stack.Screen name="index"/>
}
    </Stack>
  );
}
