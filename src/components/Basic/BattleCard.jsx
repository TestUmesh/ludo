import { Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import battle from '../../styles/battle'

const BattleCard = () => {
  return (
    <View style={battle.battleContainer}>
    <View>
      <Text>BattleCard</Text>
    </View>
     <View style={battle.battleInsideContainer}>
      
         <Ionicons name='person-circle-outline' size={15} color={"red"}/>
         <Ionicons name='person-circle-outline' size={15} color={"green"}/>
    </View>
     
    <View style={battle.battleInsideContainer}>
      
        <Text>Efeentry </Text>
         <Text>V/S</Text>
          <Text> prize</Text>
    </View>
     <View style={battle.battleInsideContainer}>
      
        <Text>$200</Text>
         <TouchableOpacity><Text>play</Text></TouchableOpacity>
          <Text> $190</Text>
    </View>
    </View>
  )
}

export default BattleCard