import Box from '@components/Box';
import Header from '@components/Header';
import support from '@styles/support';
import { FlatList, Linking, SafeAreaView, Text } from 'react-native';
const Support = () => {
    const makePhoneCall = () => {
    Linking.openURL('tel:123456789').catch(err => console.error('Phone call error:', err));
  };

  const supportOptions = [
  { id: '1', text: 'WhatsApp', name: 'logo-whatsapp', color: 'green', onPress: () => Linking.openURL('https://wa.me/1234567890') },
  { id: '2', text: '123456789', name: 'call', color: 'blue', onPress: () => Linking.openURL('tel:123456789') },
  // { id: '3', text: 'Email', name: 'mail', color: 'blue', onPress: () => Alert.alert('Email', 'Clicked Email') },
];

  return (
    <SafeAreaView >
       <Header title={"umesh+"}/>
       <Text style={support.supportHeader}> Contact Us At Below Platforms. </Text>
       <FlatList
  data={supportOptions}
  numColumns={2}
  keyExtractor={(item) => item.id}
  columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 10 }}
  contentContainerStyle={{ paddingVertical: 10 }}
  renderItem={({ item }) => (
    <Box
      text={item.text}
      name={item.name}
      color={item.color}
      onPress={item.onPress}
    />
  )}
/>

     </SafeAreaView>
  )
}

export default Support;