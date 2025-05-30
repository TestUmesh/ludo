import { Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import walletstyle from '../../styles/wallet'

const WalletBox = ({cashType,description, moneyType,amount ,buttonName}) => {
  return (
  <View style={walletstyle.walletMainContainer}>
    <View style={
        walletstyle.walletContainerHeader
    }><Text style={walletstyle.walletheadertext}>{cashType}</Text></View>

<View style={walletstyle.walletContainerdescription}>
    <Text>{description} </Text>
</View>
<View style={walletstyle.walletView}>
    <View style={walletstyle.walletViewviewboxicon}>
        <Ionicons name='cash-outline' size={20} color={"green"}/>
       
        <Text>{amount}</Text>
         <Text>{moneyType}</Text>
    </View>
</View>
<View>
    <TouchableOpacity style={
        walletstyle.walletcontainerFootbutton
    }>
        <Text style={walletstyle.walletheadertext}>{buttonName}</Text>
    </TouchableOpacity>
</View>

  </View>
  )
}

export default WalletBox