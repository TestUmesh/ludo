import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import head from './../styles/header';

const Header = ({ title }) => {
  return (

    <View style={head.headerContainer}>
      <Ionicons name="menu" size={35} color="black" style={{ paddingTop: 5 }} />
      <Image source={require('./../assets/images/round.jpg')} style={head.headLogo} />
      <View style={head.headerTextView1}>
        <Ionicons name='cash-sharp' size={20} color={"green"} />
        <Text>{title}</Text>
      </View>
      <View style={head.headerTextView1}>
        <Ionicons name='gift-outline' size={20} color={"black"} />
        <Text>{title}</Text></View>
    </View>
  );
};

export default Header;
