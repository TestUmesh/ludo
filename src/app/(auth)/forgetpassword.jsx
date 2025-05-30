import { Link } from "expo-router";
import { Alert, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import CButton from "../../components/CButton";
import Auth from '../../styles/authstyle';
import styles from '../../styles/land';
const forgetpassword = () => {
 return (
    <SafeAreaView style={styles.MainContainer}>
      <KeyboardAvoidingView style={Auth.KeyBoardCon} behavior={Platform.OS === "android"||"OS" ? "height":null} keyboardVerticalOffset={20} >
      <ScrollView >
      <View style={Auth.logocontainersize}>
       
        <Image source={require('../../assets/images/round.jpg')} style={
          Auth.RoundLogo
        } />
      </View>
      
      <View style={Auth.Logincontainer }>
        <Text style={Auth.Loginheader}>Forget Password</Text>
    
       <TextInput placeholder='Enter Email/PhoneNumber' style={Auth.LoginInput} keyboardType="name-phone-pad"></TextInput>
      
      <CButton title={"Reset"} onPress={()=>Alert.alert("umesh")}/>
        <Link href={"/(auth)/login"} style={Auth.LinkStyle}>Login</Link>
         
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


export default forgetpassword