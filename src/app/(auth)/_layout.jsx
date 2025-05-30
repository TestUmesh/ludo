import { Stack } from 'expo-router';

const AuthLayout = () => {
    
  return (
    <Stack>
     <Stack.Screen name="/login"/>
     <Stack.Screen name="/register" />
     <Stack.Screen name="/forgetpassword" style={{paddingTop:20}}/>
     <Stack.Screen name="(tabs)" />
    </Stack>
  )
}

export default AuthLayout;