import { StyleSheet } from "react-native";

const entry= StyleSheet.create({

    entryPageContainer: {
  
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: 10,
  height:210  
},
entryImageBox: {
   position:"relative",
  padding:2,
  width: '47%',
 height:200,
margin:3,
  marginBottom: 10,
borderRadius:6,borderStyle:"solid",borderWidth:2,borderColor:"black" ,
elevation: 5,
shadowColor: 'black',
shadowOpacity: 0.3,
shadowOffset: { width: 0, height: 2 },

},
entryPageHeaderText:{
  marginHorizontal:5,
  fontFamily:"Orbitron",width:"60%",
  fontWeight:22,borderBottomColor:"red",borderBottomWidth:2,
},
entryImageSize:{

  width:"100%",overflow:"hidden",height:190,borderRadius:5
},
entryBoxText:{
   position: 'absolute',
  bottom: 20,
  left: 0,
  right: 0,
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  paddingVertical: 4,
  borderRadius: 4,
}
,entryImageView:{
   position: 'relative',
    width: '100%',
    height: '100%',
},
topAnnouncementBox:{
  marginVertical:10,padding:5,marginHorizontal:5,
  height:50,borderRadius:10,textAlign:"justify"

}
});
export default entry;