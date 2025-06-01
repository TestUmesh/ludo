import WalletBox from '@components/Basic/WalletBox';
import Header from '@components/Header';
import { SafeAreaView, ScrollView } from 'react-native';
const Wallet = () => {
  return (
    <SafeAreaView>
    <Header  title={"umesh +"}/>
       <ScrollView scrollEnabled={true} >
       <WalletBox cashType={"Desposite Cash"} buttonName={"ADD"} money={"200"} description={
        "Apply 5% commision"}
        moneyType={"uuhnb"}
        />
         <WalletBox cashType={"Withdraw Cash"} buttonName={"Withdraw"} money={"500"} description={
        "Apply 5% commision"}
        moneyType={"uuhnb"}
        />
         
        </ScrollView>
     </SafeAreaView>
  )
}

export default Wallet;