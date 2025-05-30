import { Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import support from './../styles/support'
const Box = ({name,text ,color,onPress}) => {
  return (
    <TouchableOpacity  style={support.containerBox} onPress={onPress}>
        
    <View >
        <Ionicons name={name} size={40} color={color} style={support.iconStyle}/>

      <Text style={support.textColor}>{text}</Text>

    </View>
    </TouchableOpacity>
  )
}

export default Box