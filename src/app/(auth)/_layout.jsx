import { Stack } from 'expo-router';

const AuthLayout = () => {
    
  return (
    <Stack screenOptions={{ headerShown: false }}>
   
     <Stack.Screen name="register" />
       <Stack.Screen name="login"/>
     <Stack.Screen name="forgetpassword" />
   
    </Stack>
  )
}

export default AuthLayout;