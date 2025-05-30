import { StyleSheet } from "react-native";

const walletstyle=StyleSheet.create({

    walletMainContainer:{
        padding:0.8,
margin:12,

height:300,
borderRadius:20,
borderColor:"black",
borderStyle:"solid",
borderWidth:1,
    },

    walletContainerHeader:{
        backgroundColor:"#e0c34c",
        height:40,borderTopEndRadius:20,borderTopStartRadius:20

    },
    walletheadertext:{
textAlign:"center",fontSize:20,
fontWeight:"bold"
    },
    walletContainerdescription:{
         backgroundColor:"#d1dbc1",
        height:70

    },
    walletView:{
         
       justifyContent:"center",
         alignSelf:"center",height:147
      

    },
    walletViewviewboxicon:{
        
        width:100,height:100,backgroundColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center", padding:10
    },

    walletcontainerFootbutton:{
backgroundColor:"#e0c34c",
        height:40,borderBottomEndRadius:20,borderBottomStartRadius:20

    }

});
export default  walletstyle;