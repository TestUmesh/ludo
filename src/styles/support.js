import { StyleSheet } from "react-native";

const support = StyleSheet.create({
    containerBox:{
       
        backgroundColor:"orange",
        paddingVertical:20,
        alignContent:"center",
        alignContent:"center",
        alignItems:"center",
        flex:1,
        borderRadius:20,
        width:150,
        margin:8,
        height:170
    },

    iconStyle:{
        padding:10,alignSelf:"center"
    },
    textColor:{
        textAlign:"center",
        padding:10,fontWeight:"bold",fontSize:20

        
    },
    supportHeader:{
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center"
        ,padding:5,
        marginVertical:15,
        textDecorationLine:"underline"
    },
    viewSupportMainContainer:{
        flex:1 , 
        flexDirection:"row" 
        ,marginTop:20}
})

export default support;