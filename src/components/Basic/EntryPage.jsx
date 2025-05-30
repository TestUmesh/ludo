import { TouchableOpacity, View } from 'react-native'
import entry from '../../styles/entrypage'

const EntryPage = () => {
  return (
    <View style={entry.entryPageContainer}>
      <TouchableOpacity style={entry.entryImageBox}><View>
        <Text></Text></View></TouchableOpacity>
      <TouchableOpacity style={entry.entryImageBox}><View>
        <Text></Text></View></TouchableOpacity>
     
    </View>
  )
}

export default EntryPage