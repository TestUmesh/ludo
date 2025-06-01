import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false, tabBarActiveTintColor: "#f01dcc", 
            tabBarInactiveTintColor: "black", tabBarStyle:
                { backgroundColor: "#786b78",
                     paddingBottom: 15, 
                     height: 60,
                      marginBottom:5,
                    borderRadius:10},
            tabBarLabelStyle:
            {
                fontFamily: "Times New Romen",
                fontSize: 14,
                fontWeight: "bold"
            }
        }} >
            < Tabs.Screen name='home' options={{
                title: "Home",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="home" size={20} color={color} />
                ),
            }} />
            < Tabs.Screen name='wallet' options={{
                title: "MyWallet", tabBarIcon: ({ color }) =>
                    (<Ionicons name="wallet-sharp" size={20} color={color} />),
            }} />
            < Tabs.Screen name='refer' options={{
                title: "Refer", tabBarIcon: ({ color }) => (
                    <Ionicons name="gift" size={20} color={color} />
                ),
            }} />
            < Tabs.Screen name='support' options={{ title: "Support", tabBarIcon: ({ color }) => (<Ionicons name="help-circle" size={20} color={color} />) }} />
            < Tabs.Screen name='profile' options={{ title: "Profile", tabBarIcon: ({ color }) => (<Ionicons name="person-add-sharp" size={20} color={color} />) }} />

        </Tabs>
    )
}

export default TabLayout;