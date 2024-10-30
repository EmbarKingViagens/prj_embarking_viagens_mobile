import { StyleSheet } from "react-native"
import {
    pal1,
    pal2,
    pal3,
    pal4,
    pal5,

} from "../../../estilo"
export default StyleSheet.create({
cardPacotes:{
  height: 500,
  width:250,
  backgroundColor:pal3,
  borderRadius: 10,
  overflow: "hidden",
 
},
titulo: {
  fontSize: 18,
  fontWeight: 'bold',
  margin: 10,
  color: "#fff"
},
imagem: {
  width: "100%",
  height: 150,

},

cardBottom:{
borderTopWidth:1,
borderTopColor:"#fff",
margin:10
},
precoOriginal: {
  fontSize: 14,
  textDecorationLine: 'line-through',
  fontWeight: "light",
  color: '#fff',
},

precoPromocional: {
  fontSize: 20,
  color: '#fff',
},

txtPrecoPessoa: {
  fontSize: 16,
  color: '#fff',
},
txtAviso: {
  fontSize: 10,
  color: '#fff',
},
row:{
  flexDirection: 'row',
  marginLeft: 10
},
texto:{
  
}


})