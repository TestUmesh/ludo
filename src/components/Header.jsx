import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import head from './../styles/header';

const Header = ({ title }) => {

  const navigation= useNavigation();
  return (

    <View style={head.headerContainer}>
      <TouchableOpacity onPress={() =>  navigation.dispatch(DrawerActions.openDrawer())}><Ionicons name="menu" size={35} color="black" style={{ paddingTop: 5 }}  /></TouchableOpacity>
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
