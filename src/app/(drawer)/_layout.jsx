import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from './customdrwer';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: 250 },
        drawerActiveTintColor: '#f01dcc',
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          // Hide this drawer' item from showing
          drawerLabel: () =>null ,
          drawerIcon: () => null,
          drawerItemStyle: { height: 0 },
          headerShown: false,
          swipeEnabled: false,
        }}
      />
    </Drawer>
  );
}
