import { StyleSheet } from "react-native";

const battle=StyleSheet.create({
    battleContainer:{
       padding:1,
        height:100,paddingHorizontal:10,
       margin:5,backgroundColor:"#d5e0e3",borderRadius:10,borderWidth:1.5,borderColor:"orange"
    },
    battleInsideContainer:{
flexDirection:"row" ,justifyContent:"space-between",padding:1
    }
});
export default battle;