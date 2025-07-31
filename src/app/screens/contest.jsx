import BattleCard from "@components/Basic/BattleCard";
import CreateContest from "@components/Basic/CreateContest";
import TopViewAnnoncement from "@components/Basic/TopViewAnnoncement";
import Header from "@components/Header";
import { SafeAreaView } from "react-native";
const contest = () => {
  return (
    <SafeAreaView style={{marginTop:5}}>
   <Header title={"umesh+"}/>
   <TopViewAnnoncement/>
   <CreateContest/>
   <BattleCard/>
   
   
  </SafeAreaView>
  )
}

export default contest;