import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CButton from '../../components/CButton';
import Auth from '../../styles/authstyle';
import styles from '../../styles/land';

const Register = () => {
  return (
     <SafeAreaView style={styles.MainContainer}>
      <KeyboardAvoidingView style={Auth.KeyBoardCon} behavior={Platform.OS === "android"||"OS" ? "height":"padding"} keyboardVerticalOffset={30} >
      <ScrollView >
      <View style={Auth.logocontainersize}>
       
        <Image source={require('../../assets/images/round.jpg')} style={
          Auth.RoundLogo
        } />
      </View>
      
      <View style={Auth.Logincontainer }>
        <Text style={[Auth.Loginheader ,{ marginVertical:10}]}>Register</Text>
    
       <TextInput  placeholder='Enter Your MobileNumber'  placeholderTextColor="black"style={Auth.SignInput}></TextInput>
       <TextInput placeholder='Enter Your Email ' placeholderTextColor="black" style={Auth.SignInput}></TextInput>
       <TextInput  placeholder='Enter Your UserName' placeholderTextColor="black" style={Auth.SignInput}></TextInput>
       <TextInput placeholder='Enter YourPassword' placeholderTextColor="black" style={Auth.SignInput}></TextInput>
      <CButton title={"Register"} onPress={()=>Alert.alert("umesh")}/>
        {/* <Link href={"/auth/forgetpassword"} style={Auth.LinkStyle}> Forget Password ?</Link>
          */}
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Register;