import EntryPage from '@components/Basic/EntryPage';
import Header from '@components/Header';
import { SafeAreaView } from 'react-native';


const Home = () => {
  return (
  <SafeAreaView style={{marginTop:5}}>
   <Header title={"umesh+"}/>
   <EntryPage/>
   
  </SafeAreaView>
  )
}

export default Home;