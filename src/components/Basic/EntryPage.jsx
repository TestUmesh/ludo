import { abimage, ludoimage } from 'constants/imageconst';
import { useRouter } from 'expo-router';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import entry from '../../styles/entrypage';

const EntryPage = () => {

  const router= useRouter();
  return (

    <View style={{flex:1,flexWrap:"nowrap",flexDirection:"column"}}>
      <Text style={entry.entryPageHeaderText}>Our Tournment </Text>
      <View style={entry.entryPageContainer}>
        <View style={entry.entryImageBox}>
          <TouchableOpacity  onPress={()=>router.push('(tabs)/contest/')}>
            <View style={entry.entryImageView}>
              <Image style={entry.entryImageSize} source={ludoimage} />
              <Text style={entry.entryBoxText}>Click Here to Join Contest</Text></View>
          </TouchableOpacity></View>
        <View style={entry.entryImageBox}>
          <TouchableOpacity onPress={()=>Alert.alert("Comming soon!!!")}>
              <View style={entry.entryImageView}>
            <Image style={entry.entryImageSize} source={abimage} />
            <Text style={entry.entryBoxText}>Comming soon!!!</Text></View>
          </TouchableOpacity>
        </View>
      </View>
     
        <View style={entry.entryPageContainer}>
        <View style={entry.entryImageBox}>
          <TouchableOpacity onPress={()=>Alert.alert("Comming soon!!!")} >
            <View style={entry.entryImageView}>
              <Image style={entry.entryImageSize} source={ludoimage} />
              <Text style={entry.entryBoxText}>Comming soon!!!</Text></View>
          </TouchableOpacity></View>
        <View style={entry.entryImageBox}>
          <TouchableOpacity onPress={()=>Alert.alert("Comming soon!!!")}>
              <View style={entry.entryImageView}>
            <Image style={entry.entryImageSize} source={abimage} />
            <Text style={entry.entryBoxText}>Comming soon!!!</Text></View>
          </TouchableOpacity>
        </View>
    
      </View>
      
      
      


    </View>
  )
}

export default EntryPage;