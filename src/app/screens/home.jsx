import EntryPage from '@components/Basic/EntryPage';
import TopViewAnnoncement from '@components/Basic/TopViewAnnoncement';
import Header from '@components/Header';
import { SafeAreaView } from 'react-native';


const Home = () => {
  return (
  <SafeAreaView style={{marginTop:5}}>
   <Header title={"umesh+"}/>
   <TopViewAnnoncement/>
   <EntryPage/>
   
  </SafeAreaView>
  )
}

export default Home;