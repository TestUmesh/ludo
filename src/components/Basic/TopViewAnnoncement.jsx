import entry from '@styles/entrypage'
import { LinearGradient } from 'expo-linear-gradient'
import { Text } from 'react-native'

const TopViewAnnoncement = () => {
  return (
    <LinearGradient 
    colors={["#EDE3AB","#E18DEB"]}
    start={{ x: 0, y: 0.5 }}
     end={{ x: 1, y: 0.5 }} style={entry.topAnnouncementBox}
    >
   
      <Text>TopViewAnnoncement</Text>
    
    </LinearGradient>
  )
}

export default TopViewAnnoncement