import { StyleSheet } from 'react-native';
import { pal1, pal2, pal3, pal4, pal5 } from '../../../estilo';
export default StyleSheet.create({
  cardPontosTuristicos:{
    minHeight: 350,
    width: 220,
    backgroundColor: pal3,
    borderRadius: 20,
    overflow: 'hidden',
    marginLeft: 10,
    marginRight: 10
  },
  imagem:{
    width:"100%",
    height:150

  },
  titulo:{
    position: "relative",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    margin:10

  },
  stars:{
    margin: 10,
    justifyContent: "space-between"
  },
  texto:{
    color: "#fff"
  }
})