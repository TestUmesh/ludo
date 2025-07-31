import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CreateContest = () => {
const [amount ,setamount]=useState("");
const[checkwallect,setcheckwallet]=useState(100);


const  presskey=()=>{
    
}

  return (
    <View style={{ flexDirection:"row", margin:4 ,padding:4}}>
    <TextInput placeholder='Add contest'value=" " placeholderTextColor={"black"} style={{borderColor:"orange",borderWidth:1.2,width:"70%"}}
    onChangeText={setamount}
    ></TextInput>
    <TouchableOpacity style={{padding:5,alignSelf:"center",backgroundColor:"yellow",margin:5,borderColor:"red",borderWidth:1.2,borderRadius:10}}><Text>Add Contest</Text></TouchableOpacity>
    </View>
  )
}

export default CreateContest