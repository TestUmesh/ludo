import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CButton = ({title, onPress}) => {
  return (
    <TouchableOpacity  style={sty.btnStyles}  onPress={onPress}>
      <Text style={sty.ButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const sty=StyleSheet.create({
    btnStyles:{
      marginTop:15,
      backgroundColor:"#124ab3",
      alignSelf:"center",
      width:"50%",
      padding:10,
      margin:"auto",
      borderRadius:15,
      borderColor:"black",
      borderWidth:1.4
      
    },
    ButtonText:{
      textAlign:"center",
      fontFamily:"Outfit",
      fontSize:20,
      fontWeight:700
    }
})




export default CButton;