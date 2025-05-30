import { Link, useRouter } from "expo-router";
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CButton from "../../components/CButton";
import Auth from '../../styles/authstyle';
import styles from '../../styles/land';

const Login = () => {
   const router = useRouter();
  return (
    <SafeAreaView style={styles.MainContainer}>
      <KeyboardAvoidingView style={Auth.KeyBoardCon} behavior={Platform.OS === "android" ? "height":null} keyboardVerticalOffset={20} >
      <ScrollView >
       
      <View style={Auth.logocontainersize}>
       
        <Image source={require('../../assets/images/round.jpg')} style={
          Auth.RoundLogo
        } />
      </View>
      
      <View style={Auth.Logincontainer }>
        <Text style={Auth.Loginheader}>LOGIN</Text>
    
       <TextInput placeholder='Enter Username' style={Auth.LoginInput} keyboardType="name-phone-pad"></TextInput>
       <TextInput placeholder='Enter  Password'  style={Auth.LoginInput}></TextInput>
      <CButton title={"Login"} onPress={()=>router.replace("/(tabs)/home")}/>
        <Link href={"/(auth)/forgetpassword"} style={Auth.LinkStyle}> Forget Password ?</Link>
         
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;