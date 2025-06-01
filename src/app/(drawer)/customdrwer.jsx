import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';


export default function CustomDrawerContent(props) {
  const route= useRouter();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        icon={({ color }) => <Ionicons name="home" size={20} color={color} />}
        onPress={() => route.push('(tabs)/home')}
      />
      <DrawerItem
        label="Wallet"
        icon={({ color }) => <Ionicons name="wallet-sharp" size={20} color={color} />}
        onPress={() => route.push('(tabs)/wallet')}
      />
      <DrawerItem
        label="Profile"
        icon={({ color }) => <Ionicons name="person" size={20} color={color} />}
        onPress={() => route.push('(tabs)/profile')}
      />

        <DrawerItem
        label="Profile"
        icon={({ color }) => <Ionicons name="help-circle-sharp" size={20} color={color} />}
        onPress={() => route.push('(tabs)/support')}
      />
        <DrawerItem
        label="Profile"
        icon={({ color }) => <Ionicons name="gift-sharp" size={20} color={color} />}
        onPress={() => route.push('(tabs)/refer')}
      />
    
    </DrawerContentScrollView>
  );
}
