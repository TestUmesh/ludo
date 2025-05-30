import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  MainContainer: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 250)'

    },
    MainLogoContainer: {
    
       flex:1,
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius:20,
        elevation:20,
        shadowColor:"black",shadowRadius:10

    },

    TextContainer: {
        
        flex:1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'rgb(52, 113, 173)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius:5,
        elevation:50,
        shadowColor:'rgb(0, 0, 0)',shadowRadius:25
    },
    HeaderText: {
        marginTop:30,
        fontFamily: "Roboto",
        fontWeight: "900",
        textAlign: "center",
        fontSize: 28,
       textDecorationColor:"black",
       textDecorationLine:"underline"

    },
    TextDescriptionCon: {
        marginTop:"auto",
        fontFamily: "Times New Roman",
        fontSize: 20,
        color: "black",
        marginBottom:"auto",
        textAlign:'justify',padding:10
      

    },

    ButtonContainer:{
        width:"75%",
        marginHorizontal:"auto",
backgroundColor:"white",
padding:10,
borderRadius:15,
marginVertical:"auto",
elevation:100,
shadowColor:'black',
shadowRadius:20
    },
    ButtonText:{
        padding:5,
        textAlign:"center",
        fontSize:18,
        fontFamily:"Roboto",
        fontWeight:700
    }

}

);
export default styles;