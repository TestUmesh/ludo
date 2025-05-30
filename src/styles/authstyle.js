import { StyleSheet } from "react-native";

const Auth = StyleSheet.create({

    KeyBoardCon:{
        flex:1
    },

    logocontainersize:{
       
    
       marginTop:10,
        width:"auto"
        ,justifyContent:"center",
        alignContent:"center"  ,
        borderColor:"red",   
        borderRadius:20
    },
    RoundLogo:{
        padding:10,
        width:210,height:210,borderRadius:150,alignSelf:"center",
        elevation:100,shadowRadius:100,shadowOpacity:1,
        shadowColor:"red"
    },
    Logincontainer:{
        marginVertical:40
        ,flex:1,
        padding:10,
        marginTop:35,
        backgroundColor:"#f0f0f0"

    },
    Loginheader:{
        fontFamily:"outfit-bold",
        fontSize:25,
        color:"black"
        ,padding:20,
        textAlign:"center"
        ,marginVertical:25,
        fontWeight:700,
        textDecorationLine:"underline"
    },
    LoginInput:{
        width:"85%",
        height:"auto",
        borderRadius:10,
        padding:10,
        backgroundColor:"#ebdeda",
        marginVertical:18,
        marginHorizontal:"auto",
        color:"black",borderWidth:1.2,borderColor:"#e89376"
    },
    LinkStyle:{
        color:"blue",fontSize:18,
        textAlign:"center",
        marginTop:18
    },
      SignInput:{
        width:"85%",
        height:"auto",
        borderRadius:10,
        padding:10,
        backgroundColor:"#ebdeda",
        marginVertical:8,
        marginHorizontal:"auto",
        color:"black",borderWidth:1.2,borderColor:"#e89376"
    },

});

export default Auth;