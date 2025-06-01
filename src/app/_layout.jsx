import { Stack } from "expo-router";
import { useState } from "react";
 function RootLayout() {

  const [islogin, setislogin]=useState(false)


  return (
    <Stack screenOptions={{ headerShown: false }}>
     {islogin?
      <Stack.Screen name="(drawer)" />  : <Stack.Screen name="index" />  
     }
    </Stack>
  );
}
export default RootLayout;