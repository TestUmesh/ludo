import { useRouter } from 'expo-router';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './../styles/land';

const Index = () => {
  const router =useRouter();
  return (
    <SafeAreaView style={styles.MainContainer}>
    
<View style={styles.MainLogoContainer}>
    <Image source={require("./../assets/images/lmj.jpg")} style={{width:"100%",height:240}}/>
</View>
    <View  style={styles.TextContainer}>
      {/* <Text style={styles.HeaderText}>Welcome To  </Text> */}
      <Text style={styles.HeaderText}>LMJ Gaming Club</Text>
      <Text style={styles.TextDescriptionCon}>e molestiae labore minima delectus quae, ea aliquid repellendususandae nemo optio.</Text>


<TouchableOpacity style={styles.ButtonContainer} onPress={()=>router.push('/(auth)/register')} >
  <Text style={styles.ButtonText}>Get started !!</Text>
   </TouchableOpacity>

   <TouchableOpacity  style={styles.ButtonContainer} onPress={()=>router.push('/(auth)/login')}>
  <Text  style={styles.ButtonText}>Already Have account ?</Text>
   </TouchableOpacity>
   
    </View>




   
    <StatusBar barStyle={"light-content"} backgroundColor={"black"}/>
    </SafeAreaView>
  )
};

export default Index;